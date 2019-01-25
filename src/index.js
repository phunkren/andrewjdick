import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { Home } from "containers/Home";
import { Resume } from "containers/Resume";
import { NotFound } from "containers/NotFound";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
  ${reset};

  html, body, div#wallop {
    height: 100%;
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', serif;
  }
`;

export const App = () => (
  <Fragment>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById("wallop"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
