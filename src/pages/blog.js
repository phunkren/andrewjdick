import React from 'react';
import styled from 'styled-components';
import { position, rgba } from 'polished';
import { graphql } from 'gatsby';
import { BlogPreview } from '../components/BlogPreview';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { H1 } from '../styles/typography';
import { COLORS } from '../styles/colors';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;

  ${MEDIA.desktop`
    padding: 2em;
  `};
`;

const ListItem = styled.li``;

const List = styled.ul`
  max-width: 100%;
  
  ${ListItem} + ${ListItem} {
    position: relative;
    margin-top: 2em;
    padding-top: 2em;

    &::before {
      ${position('absolute', '0', '0', null, '0')};
      content: "";
      height: 1px;
      background-color: ${rgba(COLORS.black, 0.5)};
    }
  }

  ${MEDIA.tablet`
    max-width: ${BREAKPOINTS.phone}px;
    margin: 0 auto;
  `}

  ${MEDIA.desktop`
    max-width: ${BREAKPOINTS.tablet}px;
  `}
`;

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
      <SEO title="Blog" pathname="blog" />
      <Main>
        <H1 id="blog" css="margin-bottom: 1em;">
          Blog
        </H1>
        <List>{posts}</List>
      </Main>
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
