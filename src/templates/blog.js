import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Text } from '../components/Text';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { linkStyles, highlightStyles } from '../components/Link';
import { SIZES } from '../components/Text';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Theme } from '../components/Theme';
import { convertPxToRem } from '../utils/unitConversion';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-huge) var(--spacing-medium);
  margin: 300px auto 0;
  width: 100%;

  ${MEDIA.tablet`
    margin-top: 400px;
    padding: var(--spacing-huge);
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
    margin-top: var(--spacing-medium);
  }

  ${MEDIA.tablet`
    max-width: ${convertPxToRem(BREAKPOINTS.tablet)};
  `}
`;

const ArticleHero = styled(Hero)`
  height: 300px;

  ${MEDIA.tablet`
    height: 400px;
  `}
`;

const Title = styled(Text)`
  position: absolute;
  top: 175px;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  left: 50%;
  text-shadow: 1px 1px 1px var(--color-black);
  width: 100%;
  padding: 0 var(--spacing-large);

  ${MEDIA.tablet`
    top: 200px;
    max-width: ${convertPxToRem(BREAKPOINTS.tablet)};
    padding: 0 var(--spacing-huge);
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
    ${MEDIA.tablet`
      padding: 0 var(--spacing-huge);
    `};
  }

  div.gatsby-highlight {
    border-radius: 0;
    margin-left: calc(var(--spacing-medium) * -1);
    width: 100vw;

    pre {
      border-radius: 0;

      code {
        padding: var(--spacing-medium);
      }
    }

    ${MEDIA.tablet`
      margin-left: calc(var(--spacing-huge) * -1);
      max-width: calc(100% + var(--spacing-huge) + var(--spacing-huge));
    `}
  }

  a:not(.gatsby-resp-image-link) {
    ${linkStyles};
    ${highlightStyles};
  }

  figcaption {
    margin-top: var(--spacing-small);
    ${SIZES['xs']};
    text-align: center;
    color: var(--color-black);
  }

  iframe,
  img {
    display: block;
    margin: var(--spacing-huge) auto 0;
    width: 100%;
    height: auto;
  }

  p > code[class*='language-'] {
    ${SIZES['pb']};
    border-radius: 4px;
    color: var(--color-black);
    padding: var(--spacing-tiny);
    background-color: var(--color-gray-200);
  }

  pre > code[class*='language-'] {
    ${SIZES['ps']};
    margin-left: calc(var(--spacing-medium) * -1);
  }

  pre[class*='language-'] {
    padding: var(--spacing-huge);
    margin: 0;
  }

  & > * + * {
    margin-top: var(--spacing-huge);
  }
`;

function BlogTemplate({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter, fields, html } = markdownRemark;

  return (
    <Layout>
      <SEO
        path={fields.slug}
        title={frontmatter.title}
        description={`🗓 ${frontmatter.date} · ⏱ ${fields.readingTime.text}`}
        canonical={frontmatter.canonical}
        published={frontmatter.date}
        article
      />

      <Theme theme="dark">
        <Header />
      </Theme>

      <ArticleHero>
        <Img
          role="img"
          alt={frontmatter.imageAlt}
          fluid={frontmatter.image.childImageSharp.fluid}
        />
      </ArticleHero>

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
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        canonical
        image {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAlt
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`;

export default BlogTemplate;
