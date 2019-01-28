import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Spring } from "react-spring";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "containers/Home";
import { CV } from "containers/CV";
import { NotFound } from "containers/NotFound";
import { ColouredContainer } from "components/ColouredContainer";
import { GlobalStyles, SpringContainer } from "./styles";
import * as serviceWorker from "./serviceWorker";

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <Router>
      <Spring delay={1000} from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <SpringContainer style={props}>
            <ColouredContainer>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cv" component={CV} />
                <Route component={NotFound} />
              </Switch>
            </ColouredContainer>
          </SpringContainer>
        )}
      </Spring>
    </Router>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById("wallop"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
