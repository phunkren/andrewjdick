import React, { Fragment } from "react";
import { GlobalStyles } from "./styles";

export const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    {children}
  </Fragment>
);
