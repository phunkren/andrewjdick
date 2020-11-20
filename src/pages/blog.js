import React from 'react';
import { animated } from 'react-spring/renderprops';
import { ArrowRightIcon } from '@modulz/radix-icons';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';
import { formatId } from '../utils/formatId';
import { SEO } from '../components/SEO';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { convertPxToRem } from '../utils/unitConversion';
import { FadeIn, BlogTrail } from '../components/Animation';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
`;

const ListItem = styled(animated.li)``;

const List = styled(animated.ul)`
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
    background-color: ${theme.overlay10};
    color: ${theme.cardColor};

    ${MEDIA.tablet`
      padding: var(--spacing-huge);
    `}
  `,
);

const Title = styled(Text)(
  ({ theme }) => css`
    width: 90%;
    color: ${theme.cardHeaderColor};
    margin-bottom: var(--spacing-small);
  `,
);

const Info = styled(Text)(
  ({ theme }) => css`
    display: block;
    color: ${theme.auxiliaryColor};
    margin-bottom: var(--spacing-medium);
  `,
);

const StyledLink = styled(Link)(
  ({ theme }) => css`
    align-self: flex-start;
    display: flex;
    align-items: center;
    width: fit-content;
    color: ${theme.linkColor};

    svg {
      will-change: transform;
      transition: transform 0.2s ease-out;
    }

    &:hover {
      padding-right: var(--spacing-small);

      svg {
        transform: translate3d(var(--spacing-small), 0, 0);
      }
    }
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

const BlogPreview = ({ post: { excerpt, frontmatter, fields } }) => {
  const formattedTitle = formatId(frontmatter.title);

  return (
    <Preview aria-labelledby={`blog post-${formattedTitle}`}>
      <Title as="h2" size="xl" id={`post-${formattedTitle}`}>
        {frontmatter.title}
      </Title>

      <Info size="xs">
        {frontmatter.date} | {fields.readingTime.text}
      </Info>

      <Text
        as="p"
        aria-label="Excerpt"
        css="padding-bottom: var(--spacing-huge);"
      >
        {excerpt}
      </Text>

      <StyledLink
        to={`/blog${fields.slug}`}
        aria-label="Click to read the article in full"
        css="font-weight: 600;"
      >
        Read more{' '}
        <ArrowRightIcon
          role="img"
          aria-hidden="true"
          height="1em"
          width="1em"
          css="margin-left: var(--spacing-tiny); position: relative; top: 2px;"
        />
      </StyledLink>
    </Preview>
  );
};

export default function Blog({ data, location: { pathname } }) {
  const { edges } = data.allMarkdownRemark;
  const posts = edges.filter(edge => !!edge.node.frontmatter.date);

  return (
    <>
      <SEO
        path={pathname}
        title="Blog"
        description="Personal contributions to modern frontend web development"
      />
      <Wrapper>
        <Main>
          <FadeIn>
            {({ o }) => (
              <animated.div style={{ opacity: o.interpolate(o => o) }}>
                <StyledTitle as="h1" size="4xl" id="blog">
                  Blog
                </StyledTitle>
              </animated.div>
            )}
          </FadeIn>
          <List>
            <BlogTrail items={posts}>
              {(item, { s }) => (
                <ListItem
                  style={{ transform: s.interpolate(s => `scale(${s})`) }}
                >
                  <BlogPreview post={item.node} />
                </ListItem>
              )}
            </BlogTrail>
          </List>
        </Main>
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
