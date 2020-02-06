import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { H3, Text } from '../styles/typography';
import { COLORS } from '../styles/colors';
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
  <Preview>
    <PreviewImage>
      <Link
        to={frontmatter.path}
        aria-label={`Read my article on ${frontmatter.title}`}
      >
        <Img fluid={frontmatter.image.childImageSharp.fluid} />
      </Link>
    </PreviewImage>

    <PreviewContent>
      <div css="margin-bottom: 1em;">
        <Link to={frontmatter.path}>
          <H3 as="h2">{frontmatter.title}</H3>
        </Link>

        <div>
          <Text>{frontmatter.date}</Text> |{' '}
          <Text>{fields.readingTime.text}</Text>
        </div>
      </div>

      <Text as="p" css="padding-bottom: 1em;">
        {excerpt}
      </Text>

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

export const BlogPreview = styled(RawBlogPreview)``;
