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
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Theme } from '../components/Theme';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  margin: 400px auto 0;

  ${MEDIA.tablet`
    padding: 2rem;
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
    margin-top: 1rem;
  }

  ${MEDIA.tablet`
    max-width: ${BREAKPOINTS.tablet}px;
  `}
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

    ${MEDIA.tablet`
      padding: 0 2em;
      line-height: 1.7;
    `};
  }

  div.gatsby-highlight {
    border-radius: 0;
    margin-left: -1rem;
    width: calc(100% + 2rem);

    pre {
      border-radius: 0;

      code {
        padding: 1em;
      }
    }
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
    margin-left: -1rem;
  }

  pre[class*='language-'] {
    padding: 2rem;
    margin: 0;
  }

  & > * + * {
    margin-top: 2rem;
  }

  ${MEDIA.tablet`
    div.gatsby-highlight {
      margin-left: 0;
      width: 100%;
    }
  `}
`;

const Title = styled(Text)`
  position: absolute;
  top: 200px;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  left: 50%;
  text-shadow: 1px 1px 1px var(--color-black);

  width: 100%;
  padding: 0 1rem;

  ${MEDIA.tablet`
    width: auto;
    padding: 0;
  `}
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

      <Theme theme="dark">
        <Header />
      </Theme>

      <Hero>
        <Img
          role="img"
          alt=""
          fluid={frontmatter.image.childImageSharp.fluid}
          css="margin: 4rem 0;"
        />
      </Hero>

      <Wrapper>
        <Main>
          <article>
            <Title as="h1" size="xxxl">
              {frontmatter.title}
            </Title>

            <Text size="xs" css="color: var(--color-gray-600);">
              {frontmatter.date} | {fields.readingTime.text}
            </Text>

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
