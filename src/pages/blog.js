import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { formatId } from '../utils/formatId';
import SEO from '../components/SEO';
import { Layout } from '../components/Layout';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { Theme } from '../components/Theme';
import { convertPxToRem } from '../utils/unitConversion';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 100px;
  margin-right: auto;
  margin-bottom: var(--spacing-huge);
  margin-left: auto;
  padding: 0 var(--spacing-medium);

  ${MEDIA.tablet`
    margin-top: 150px;
    padding: 0 var(--spacing-huge);
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-gray-200);
`;

const ListItem = styled.li``;

const List = styled.ul`
  max-width: 100%;
  
  ${ListItem} + ${ListItem} {
    position: relative;
    margin-top: var(--spacing-huge);
  }

  ${MEDIA.tablet`
    max-width: ${convertPxToRem(BREAKPOINTS.tablet)};
    margin: 0 auto;
  `}
`;

const Preview = styled.article`
  display: flex;
  flex-flow: column;
  padding: var(--spacing-huge) var(--spacing-medium);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  background-color: var(--color-white);

  ${MEDIA.tablet`
    flex-flow: row;
    padding: var(--spacing-huge);
  `}
`;

const PreviewImage = styled.div`
  flex: 1;
  margin-top: calc(var(--spacing-huge) * -1);
  margin-right: 0;
  margin-left: calc(var(--spacing-medium) * -1);
  width: calc(100% + var(--spacing-huge));

  & > div:first-child {
    height: 150px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 4px;
  }

  ${MEDIA.tablet`
    flex: 0 1 150px;
    margin-top: 0;
    margin-right: var(--spacing-huge);
    margin-left: 0;
    width: 100%;

    & > div:first-child {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  `}
`;

const PreviewContent = styled.div`
  flex: 1;

  ${MEDIA.tablet`
    margin-top: 0;
  `}
`;

const Title = styled(Text)`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const BlogPreview = ({ post: { excerpt, frontmatter, fields } }) => (
  <Preview aria-labelledby={`blog post-${formatId(frontmatter.title)}`}>
    <PreviewImage aria-hidden="true">
      <Img role="img" alt="" fluid={frontmatter.image.childImageSharp.fluid} />
    </PreviewImage>

    <PreviewContent>
      <div css="margin-bottom: var(--spacing-medium);">
        <Text as="h2" size="xl" id={`post-${formatId(frontmatter.title)}`}>
          {frontmatter.title}
        </Text>

        <Text size="xs" css="color: var(--color-gray-600);">
          {frontmatter.date} | {fields.readingTime.text}
        </Text>
      </div>

      <Text
        as="p"
        aria-label="Excerpt"
        css="padding-bottom: var(--spacing-medium);"
      >
        {excerpt}
      </Text>

      <Link
        to={frontmatter.path}
        aria-label="Click to read the article in full"
        css="display: inline-block; color: var(--color-blue-600);"
      >
        Read more →
      </Link>
    </PreviewContent>
  </Preview>
);

export default function Blog({ data }) {
  const { edges } = data.allMarkdownRemark;
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <ListItem key={edge.node.id}>
        <BlogPreview post={edge.node} />
      </ListItem>
    ));

  return (
    <Layout>
      <SEO title="Blog" pathname="/blog" />
      <Theme theme="dark">
        <Header />
      </Theme>
      <Wrapper>
        <Hero />
        <Main>
          <Title as="h1" id="blog">
            Blog
          </Title>
          <List>{posts}</List>
        </Main>
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 240)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            image {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
