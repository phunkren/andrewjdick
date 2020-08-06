---
path: /blog/2020-06-02-multiple-entry-points-in-create-react-app-without-ejecting
title: Multiple entry points in Create React App without ejecting
image: ../src/assets/images/multiple-entry.jpg
imageAlt: An apartment block with a series of coloured doors
date: 2020-06-02
---

I was recently tasked with building two applications in parallel. The first was a commercial web application, and the second acted as a platform to A/B test content messaging, page layouts, and so on.

To be ruthlessly efficient, I wanted to reuse the majority of the core components and styles for both applications, and interchange any branded assets (images, fonts, color palette, etc.) with a dummy brand using Styled Components’ [theming](https://styled-components.com/docs/advanced#theming) capabilities.

The challenge, then, was to create multiple applications from a single [Create React App](https://github.com/facebook/create-react-app) (CRA) application that shared common components and styles but with no trace of the other’s branded assets in their bundled build files. Thankfully, there’s a number of ways to achieve this, ranging in complexity and development effort.

## Multiple options for multiple entry points

[Lerna](https://github.com/lerna/lerna) is a popular tool that maintains multiple packages under a single repository (commonly referred to as a monorepo). It achieves this by linking identical dependencies across its packages, with the ability to publish them either collectively or individually.

Lerna would allow us to create a package for each application and one for the core components to share between them. This certainly solves the use case, but requires us to rearchitect the entire codebase and increase the complexity of the build process.

Given that there are no immediate plans to add any other containers to the codebase, and that the testing application will likely not be required beyond the initial development phases, we decided the associated overhead for this scenario was overkill.

A leaner approach would be to rewire the codebase with [React App Rewired](https://github.com/timarney/react-app-rewired), which tweaks the CRA build scripts without having to [eject](https://create-react-app.dev/docs/available-scripts/#npm-run-eject). In our case, we would use rewired to alter the application’s entry point at build time.

A major drawback here is that in doing so, we’d break the guarantees that CRA provides by hiding the configuration files from us, and the software itself is only lightly maintained by the community at the time of writing ([customize-cra](https://github.com/arackaf/customize-cra) is a popular package built on top of rewired that supports CRA v2). This solution could be viable on a personal project, but it wasn’t something we were willing to depend on for a commercial application.

Ejecting is a one-way operation that cannot be undone. It allows us complete control of the project’s infrastructure by converting the codebase into a standard React application at the cost of transferring the responsibility of maintaining the exposed configuration to our team. This option is viable in some scenarios, but it’s usually considered a last resort due to the increased complexity and associated maintenance cost.

Each of these — and plenty more — are all viable solutions that come with their own set of benefits and drawbacks. However, for this particular scenario, we were keen to investigate a simple solution that allows us to work from a single codebase, not rely on third-party dependencies, and not eject from the safety net of CRA.

## To infinity, or beyond

Let’s look at the default entry point in a CRA application. The `src/index.js` file imports the App container and renders it inside the `div#root` element defined in `public/index.html`.

```jsx
/* src/index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/* public/index.html */
<body>
  <noscript>You need to enable JavaScript to run this app</noscript>
  <div id="root"></div>
</body>;
```

We can introduce multiple points of entry by importing both containers into the `index.js` file and conditionally render them based on a constant variable. This allows us to switch between the containers, but comes with a couple of caveats.

In order to switch between the builds, we’d need to manually update the `isTestEnv` variable. The variable always needs to be correctly set when each of the sites are deployed, otherwise the wrong code would be deployed to the production environment.

```jsx
/* src/index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Test from './test';

const isTestEnv = true;

if (isTestEnv) {
  ReactDOM.render(<Test />, document.getElementById('root'));
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}
```

Let’s tighten this up by creating a `.env` file with a [custom environment variable](https://create-react-app.dev/docs/adding-custom-environment-variables/). Now we have the ability to choose the build target before running the local development script and also permanently assign a value to each of our production environments.

```jsx
/* .env */
REACT_APP_BUILD_TARGET=

/* index.js */
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Test } from './Test';

if (process.env.REACT_APP_BUILD_TARGET === 'test')
  ReactDOM.render(<Test />, document.getElementById("root"));
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}
```

We used [Netlify](https://www.netlify.com/) to create a production environment for each application. Both sites will be virtually identical. They’ll both point to the same [GitHub repository](https://github.com/phunkren/multiple-entry-points) and have master set as the production branch. The only difference will be their respective `BUILD_TARGET` environment variable: `test` is assigned to the [testing site](https://multiple-entry-points-test.netlify.app/), and `app` for the [main application](https://multiple-entry-points-app.netlify.app/).

<figure>
	<img src="../src/assets/images/entry-point-test.jpg" alt="The test production environment on Netlify."/>
  <figcaption>1.1: The test production environment on Netlify.</figcaption>
</figure>

<figure>
	<img src="../src/assets/images/entry-point-app.jpg" alt="The app production environment on Netlify"//>
  <figcaption>1.2: The app production environment on Netlify.</figcaption>
</figure>

We now have two production environments with the correct build target and free from human error. All that’s left is to ensure that only the code from the defined container appears in the bundled build.

Due to the nature of tree shaking, all of the imported containers in the application’s current `index.js` file would appear in the production build files, regardless of our build target. To remedy this, we can use CommonJS to conditionally require the desired container based on the `BUILD_TARGET` environment variable.

```jsx
/* index.js */
require(process.env.REACT_APP_BUILD_TARGET === 'test' ? './test' : './app');
```

This works. However, adding multiple entry points would quickly make the conditional logic unwieldy. It also means that setting the environment variable to anything other than `test` will render the main application.

We refined this by refactoring the current solution to utilize [ES6 dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports). We define a collection of build targets, [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) the desired target based on our environment variable, and render the target’s default export whenever the imported container’s promise is resolved. 💥

```jsx
/* index.js */
import React from 'react';
import ReactDOM from 'react-dom';

const BUILD_TARGETS = [
  {
    name: 'app',
    path: './app',
  },
  {
    name: 'test',
    path: './test',
  },
];

// Determine which entry point to import
const { path } = BUILD_TARGETS.find(
  ({ name }) => process.env.REACT_APP_BUILD_TARGET === name,
);

// Import the entry point and render it's default export
import(`${path}`).then(({ default: BuildTarget }) =>
  ReactDOM.render(
    <React.StrictMode>
      <BuildTarget />
    </React.StrictMode>,
    document.getElementById('root'),
  ),
);
```

## TL;DR

You can create multiple entry points in a CRA application without ejecting by using an environment variable to conditionally import container files. Doing this prevents code from the other containers appearing in the desired bundled build.

**Resources**

- [GitHub](https://github.com/phunkren/multiple-entry-points)
- [Netlify (App)](https://multiple-entry-points-app.netlify.app)
- [Netlify (Test)](https://multiple-entry-points-test.netlify.app)

Special thanks to [Stephen Taylor](https://twitter.com/meandmycode) and [Robin Weston](https://twitter.com/robinweston) for their valuable input.

Like the article? [Let me know on Twitter](https://twitter.com/phunkren) 🐦
