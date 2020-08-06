import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';
import SEO from '../components/SEO';
import { Text } from '../components/Text';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { linkStyles, highlightStyles } from '../components/Link';
import { SIZES } from '../components/Text';

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
  h2 {
    ${SIZES['xl']};
  }

  h3 {
    ${SIZES['l']};
  }

  h4 {
    ${SIZES['m']};
  }

  p {
    ${SIZES['s']};

    ${MEDIA.desktop`
      line-height: 1.7;
    `};

    padding: 0 2em;
  }

  a:not(.gatsby-resp-image-link) {
    ${linkStyles};
    ${highlightStyles};
  }

  figcaption {
    margin-top: 0.5em;
    ${SIZES['xs']};
    text-align: center;
    color: var(--color-black);
  }

  iframe,
  img {
    display: block;
    margin: 2em auto 0;
  }

  p > code[class*='language-'] {
    ${SIZES['pb']};
    border-radius: 0.25rem;
    color: var(--color-gray-600);
    padding: 4px;
    background-color: var(--color-gray-200);
  }

  pre > code[class*='language-'] {
    ${SIZES['ps']};
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
            <Text as="h1" size="xl" css="margin-bottom: 0.25em;">
              {frontmatter.title}
            </Text>

            <Text size="xs" css="color: var(--color-gray-600);">
              {frontmatter.date} | {fields.readingTime.text}
            </Text>

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
