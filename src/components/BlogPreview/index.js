import React from "react";
import Img from "gatsby-image";
import { Link } from "../Link";
import { H3, Text } from "../../styles/typography";
import { COLORS } from "../../styles/colors";
import { Preview, PreviewImage, PreviewContent } from "./styles";

export const BlogPreview = ({ post: { excerpt, frontmatter, fields } }) => (
  <Preview>
    <PreviewImage>
      <Link to={frontmatter.path}>
        <Img fluid={frontmatter.image.childImageSharp.fluid} />
      </Link>
    </PreviewImage>

    <PreviewContent>
      <H3 as="h2">{frontmatter.title}</H3>

      <div>
        <Text>{frontmatter.date}</Text> | <Text>{fields.readingTime.text}</Text>
      </div>

      <Text as="p">{excerpt}</Text>

      <Link
        to={frontmatter.path}
        css={`
          display: block;
          color: ${COLORS.cadetBlue};
        `}
      >
        Read more →
      </Link>
    </PreviewContent>
  </Preview>
);
