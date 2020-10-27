import React from 'react';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';
import { formatId } from '../utils/formatId';
import { SEO } from '../components/SEO';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { convertPxToRem } from '../utils/unitConversion';
import { Footer } from '../components/Footer';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 76px;
  margin-right: auto;
  margin-bottom: var(--spacing-massive);
  margin-left: auto;
  padding: 0 var(--spacing-medium);

  ${MEDIA.tablet`
    padding: 0 var(--spacing-huge);
  `}
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.wrapperOverlay};
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

const Preview = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-flow: column;
    padding: var(--spacing-huge) var(--spacing-medium);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    border-radius: 4px;
    background-color: ${theme.background};
    color: ${theme.cardColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      border-radius: 4px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      background: ${theme.cardOverlay};
    }

    & > * {
      z-index: 1;
    }

    ${MEDIA.tablet`
      padding: var(--spacing-huge);
    `}
  `,
);

const Title = styled(Text)(
  ({ theme }) => css`
    width: 90%;
    color: ${theme.cardHeaderColor};
  `,
);

const Info = styled(Text)(
  ({ theme }) => css`
    color: ${theme.auxiliaryColor};
  `,
);

const StyledLink = styled(Link)(
  ({ theme }) => css`
    display: inline-block;
    color: ${theme.cardLinkColor};
    margin-left: auto;
  `,
);

const StyledTitle = styled(Text)`
  color: white;
  margin-bottom: var(--spacing-large);

  ${MEDIA.tablet`
    opacity: 0;
    pointer-events: none;
  `}
`;

const BlogPreview = ({ post: { excerpt, frontmatter, fields } }) => (
  <Preview aria-labelledby={`blog post-${formatId(frontmatter.title)}`}>
    <Title as="h2" size="xl" id={`post-${formatId(frontmatter.title)}`}>
      {frontmatter.title}
    </Title>

    <Info size="xs">
      {frontmatter.date} | {fields.readingTime.text}
    </Info>

    <Text as="p" aria-label="Excerpt">
      {excerpt}
    </Text>

    <StyledLink
      to={`/blog${fields.slug}`}
      aria-label="Click to read the article in full"
    >
      Read more →
    </StyledLink>
  </Preview>
);

export default function Blog({ data, location: { pathname } }) {
  const { edges } = data.allMarkdownRemark;
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <ListItem key={edge.node.id}>
        <BlogPreview post={edge.node} />
      </ListItem>
    ));

  return (
    <>
      <SEO
        path={pathname}
        title="Blog"
        description="Personal contributions to modern frontend web development"
      />
      <Header variant="dark" />
      <Wrapper>
        <Hero />
        <Main>
          <StyledTitle as="h1" size="4xl" id="blog">
            Blog
          </StyledTitle>
          <List>{posts}</List>
        </Main>
        <Footer />
      </Wrapper>
    </>
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
            title
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
