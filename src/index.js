import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "pages/Home";
import { CV } from "pages/CV";
import { NotFound } from "pages/NotFound";
import { GlobalStyles } from "./styles";
import * as serviceWorker from "./serviceWorker";

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cv" component={CV} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
);

render(<App />, document.getElementById("wallop"));

serviceWorker.register();
