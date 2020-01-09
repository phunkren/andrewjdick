import React, { Fragment } from "react";
import { Transition } from "react-spring/renderprops";
import { GlobalStyles, Main } from "./styles";

export const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    <Transition
      items={true}
      delay={250}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {() => props => <Main style={props}>{children}</Main>}
    </Transition>
  </Fragment>
);
