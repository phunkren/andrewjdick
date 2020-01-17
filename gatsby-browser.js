import React from "react";
import { BreadcrumbProvider } from "./src/components/breadcrumb";
require("prismjs/themes/prism-okaidia.css");

export const wrapRootElement = ({ element }) => (
  <BreadcrumbProvider>{element}</BreadcrumbProvider>
);
