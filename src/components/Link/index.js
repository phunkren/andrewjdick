import React from "react";
import { RawLink, RawExternalLink } from "./styles";

export const Link = ({ children, ...props }) => (
  <RawLink {...props}>{children}</RawLink>
);

export const ExternalLink = ({ children, withHighlight, ...props }) => (
  <RawExternalLink
    target="_blank"
    rel="noreferrer"
    highlight={withHighlight}
    {...props}
  >
    {children}
  </RawExternalLink>
);
