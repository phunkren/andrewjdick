import React from "react";
import { RawLink } from "./styles";

export const Link = ({ children, ...props }) => (
  <RawLink {...props}>{children}</RawLink>
);

export const ExternalLink = ({ children, ...props }) => (
  <Link target="_blank" {...props}>
    {children}
  </Link>
);
