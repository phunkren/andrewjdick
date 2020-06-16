import React from 'react';
import styled from 'styled-components';
import { rgba, position } from 'polished';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';
import SEO from '../components/SEO';
import { H2, Text } from '../styles/typography';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { COLORS } from '../styles/colors';

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

  a {
    color: inherit;
    position: relative;
    text-decoration: none;
    background: linear-gradient(
      180deg,
      ${rgba(COLORS.white, 0)} 95%,
      ${COLORS.cadetBlue} 5%
    );

    &::before {
      content: '';
      ${position('absolute', '0', '0', '0', '0')};
      opacity: 0;
      z-index: -1;
    }

    &:hover {
      color: inherit;

      &::before {
        opacity: 1;
        background: linear-gradient(
          180deg,
          ${rgba(COLORS.white, 0)} 66%,
          ${COLORS.cadetBlue} 33%
        );
      }
    }

    &:active {
      color: inherit;

      &::before {
        opacity: 1;
        background: linear-gradient(
          180deg,
          ${rgba(COLORS.white, 0)} 1%,
          ${COLORS.cadetBlue} 99%
        );
      }
    }
  }

  figcaption {
    margin-top: 0.5em;
    font-size: 1rem;
    text-align: center;
    color: ${rgba(COLORS.black, 0.5)};
  }

  iframe,
  img {
    display: block;
    margin: 2em auto 0;
  }

  p > code[class*='language-'] {
    font-size: 0.95rem;
    border-radius: 0.25rem;
    color: ${COLORS.cadetBlue};
    padding: 4px;
    background-color: ${rgba(COLORS.cadetBlue, 0.1)};
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
            <div>
              <H2 as="h1" css="margin-bottom: 0.25em;">
                {frontmatter.title}
              </H2>
              <Text>{frontmatter.date}</Text> |{' '}
              <Text>{fields.readingTime.text}</Text>
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
