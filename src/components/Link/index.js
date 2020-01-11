import React from "react";
import Img from "gatsby-image";
import { H3, Text } from "../../styles/typography";
import { COLORS } from "../../styles/colors";
import { RawLink, RawExternalLink, Preview } from "./styles";

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
  <Preview>
    <RawLink to={post.frontmatter.path}>
      <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
    </RawLink>
    <H3 as="h2">{post.frontmatter.title}</H3>
    <Text as="p">{post.excerpt}</Text>
    <RawLink
      to={post.frontmatter.path}
      css={`
        color: ${COLORS.cadetBlue};
      `}
    >
      Read more →
    </RawLink>
  </Preview>
);
