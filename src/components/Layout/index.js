import React from "react";
import { Transition } from "react-spring/renderprops";
import { GlobalStyles, Main } from "./styles";

export const Layout = ({ children }) => (
  <Transition
    items={true}
    delay={200}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
  >
    {() => props => (
      <Main style={props}>
        <GlobalStyles />
        {children}
      </Main>
    )}
  </Transition>
);
