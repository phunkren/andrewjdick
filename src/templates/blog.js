import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';
import SEO from '../components/SEO';
import { H2, Text } from '../styles/typography';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { linkStyles, highlightStyles } from '../components/Link';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em;

  ${MEDIA.desktop`
    padding: 2em;
  `};
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;

  > * + * {
    margin-top: 2em;
  }

  ${MEDIA.tablet`
    max-width: ${BREAKPOINTS.phone}px;
  `}

  ${MEDIA.desktop`
    max-width: ${BREAKPOINTS.tablet}px;
  `};
`;

const Section = styled.section`
  p {
    font-size: 1.25rem;
    line-height: 2rem;
  }

  a:not(.gatsby-resp-image-link) {
    ${linkStyles};
    ${highlightStyles};
  }

  figcaption {
    margin-top: 0.5em;
    font-size: 1rem;
    text-align: center;
    color: var(--color-black);
  }

  iframe,
  img {
    display: block;
    margin: 2em auto 0;
  }

  p > code[class*='language-'] {
    font-size: 0.95rem;
    border-radius: 0.25rem;
    color: var(--color-indigo-600);
    padding: 4px;
    background-color: var(--color-indigo-200);
  }

  pre > code[class*='language-'] {
    font-size: 0.75rem;
    line-height: normal;
  }

  & > * + * {
    margin-top: 2rem;
  }
`;

function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, fields, html } = markdownRemark;

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        pathname={`/${frontmatter.path}`}
        article
      />

      <Wrapper>
        <Main>
          <article>
            <H2 as="h1" css="margin-bottom: 0.25em;">
              {frontmatter.title}
            </H2>
            <div css="color: var(--color-gray-600);">
              <Text>{frontmatter.date}</Text> |{' '}
              <Text css="color: var(--color-gray-600);">
                {fields.readingTime.text}
              </Text>
            </div>

            <div aria-hidden="true">
              <Img
                role="img"
                alt=""
                fluid={frontmatter.image.childImageSharp.fluid}
                css="margin: 4rem 0;"
              />
            </div>

            <Section dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </Main>
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
`;

export default BlogTemplate;
