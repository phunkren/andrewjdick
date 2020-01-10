import React from "react";
import { Link as RouterLink } from "gatsby";
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

export const PostLink = ({ post }) => (
  <div>
    <RouterLink to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </RouterLink>
  </div>
);
