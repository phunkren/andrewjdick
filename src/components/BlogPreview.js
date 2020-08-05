import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { formatId } from '../utils/formatId';
import { H3, Text } from '../styles/typography';
import { MEDIA } from '../styles/media';
import { Link } from './Link';

const Preview = styled.article`
  display: flex;
  flex-flow: column;

  ${MEDIA.desktop`
    flex-flow: row;
  `}
`;

const PreviewImage = styled.div`
  flex: 1;
  margin-right: 0;

  ${MEDIA.desktop`
    flex: 0 1 25%;
    margin-right: 2em;
  `}
`;

const PreviewContent = styled.div`
  flex: 1;

  ${MEDIA.desktop`
    margin-top: 0;
  `}
`;

const RawBlogPreview = ({ post: { excerpt, frontmatter, fields } }) => (
  <Preview
    css="color: var(--color-black);"
    aria-labelledby={`blog post-${formatId(frontmatter.title)}`}
  >
    <PreviewImage aria-hidden="true">
      <Img role="img" alt="" fluid={frontmatter.image.childImageSharp.fluid} />
    </PreviewImage>

    <PreviewContent>
      <div css="margin-bottom: 1em;">
        <H3 id={`post-${formatId(frontmatter.title)}`} as="h2">
          {frontmatter.title}
        </H3>

        <div>
          <Text>{frontmatter.date}</Text> |{' '}
          <Text>{fields.readingTime.text}</Text>
        </div>
      </div>

      <Text as="p" aria-label="Excerpt" css="padding-bottom: 1em;">
        {excerpt}
      </Text>

      <Link
        to={frontmatter.path}
        aria-label="Click to read the article in full"
        css="display: inline-block; color: var(--color-cadetBlue);"
      >
        Read more →
      </Link>
    </PreviewContent>
  </Preview>
);

export const BlogPreview = styled(RawBlogPreview)``;
