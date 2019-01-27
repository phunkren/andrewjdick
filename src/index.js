import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "containers/Home";
import { Resume } from "containers/Resume";
import { NotFound } from "containers/NotFound";
import { ColouredContainer } from "components/ColouredContainer";
import { GlobalStyles } from "./styles";
import * as serviceWorker from "./serviceWorker";

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <Router>
      <ColouredContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </ColouredContainer>
    </Router>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById("wallop"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
