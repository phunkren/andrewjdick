import React from 'react';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';
import { mix } from 'polished';
import { SEO } from '../components/SEO';
import { Text } from '../components/Text';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { linkStyles, highlightStyles } from '../components/Link';
import { SIZES } from '../components/Text';
import { convertPxToRem } from '../utils/unitConversion';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-huge) var(--spacing-medium) var(--spacing-massive);
  margin: 300px auto 0;
  width: 100%;

  ${MEDIA.desktop`
    margin-top: 400px;
    padding: var(--spacing-huge) var(--spacing-huge) var(--spacing-massive);
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

  ${MEDIA.desktop`
    top: 200px;
    max-width: ${convertPxToRem(BREAKPOINTS.tablet)};
    padding: 0 var(--spacing-huge);
  `}
`;

const Info = styled(Text)(
  ({ theme }) => css`
    display: block;
    margin-bottom: var(--spacing-huge);
    color: ${theme.auxiliaryColor};
  `,
);

const Section = styled.section(
  ({ theme }) => css`
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
      font-size: 1.25rem;

      ${MEDIA.tablet`
        padding: 0 var(--spacing-huge);
      `};
    }

    ul {
      list-style-type: disc;
      margin: 0 var(--spacing-large);
      padding: 0;

      ${MEDIA.tablet`
        margin: 0 var(--spacing-huge);
        padding: 0 var(--spacing-huge);
      `};
    }

    div.gatsby-highlight {
      border-radius: 0;
      margin-left: calc(var(--spacing-medium) * -1);
      width: 100vw;

      pre {
        background: ${mix(0.925, 'rgb(0,0,0)', 'rgb(255,255,255)')};
      }

      pre code {
        padding: var(--spacing-medium);
      }

      ${MEDIA.desktop`
        margin-left: calc(var(--spacing-huge) * -1);
        max-width: calc(100% + var(--spacing-huge) + var(--spacing-huge));

        pre {
          border-radius: 4px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
        }
      `}
    }

    a:not(.gatsby-resp-image-link) {
      ${linkStyles};
      ${highlightStyles};
    }

    figcaption {
      ${SIZES['xs']};
      margin-top: var(--spacing-small);
      text-align: center;
      color: ${theme.auxiliaryColor};
    }

    img {
      display: block;
      margin: var(--spacing-huge) auto 0;
      width: 100%;
      height: auto;
    }

    div.iframeWrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
      width: 100%;
      max-width: 100%;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    p > code[class*='language-'] {
      ${SIZES['ps']};
      font-size: inherit;
      font-weight: 500;
      color: ${theme.auxiliaryColor};
      background-color: transparent;
      padding: 0;
    }

    pre > code[class*='language-'] {
      ${SIZES['ps']};
      margin-left: calc(var(--spacing-medium) * -1);
      width: 100%;

      .comment {
        ${SIZES['xs']}
        color: var(--color-gray-600);
        font-style: italic;
      }

      .string,
      .attr-value,
      .parameter,
      .attr-value > :not(.attr-equals) {
        color: var(--color-blue-200);
      }

      .interpolation {
        color: var(--color-orange-100);
      }

      .punctuation {
        color: var(--color-charcoal);
      }

      .constant {
        color: var(--color-orange-500);
      }

      .class-name,
      .tag {
        color: var(--color-orange-400);
      }

      .function {
        color: var(--color-blue-400);
      }

      .keyword,
      .attr-name,
      .operator {
        color: var(--color-orange-300);
      }
    }

    pre[class*='language-'] {
      margin: 0;
      padding: var(--spacing-medium);
      background: var(--color-black);

      ${MEDIA.tablet`
        padding: var(--spacing-huge);
      `}
    }

    & > * + * {
      margin-top: var(--spacing-huge);
    }
  `,
);

function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, fields, html } = markdownRemark;

  return (
    <>
      <SEO
        path={fields.slug}
        title={frontmatter.title}
        description={`🗓 ${frontmatter.date} · ⏱ ${fields.readingTime.text}`}
        canonical={frontmatter.canonical}
        published={frontmatter.date}
        article
      />

      <Wrapper>
        <Main>
          <article>
            <Title as="h1" size="xxxl">
              {frontmatter.title}
            </Title>

            <Info size="xs">
              {frontmatter.date} | {fields.readingTime.text}
            </Info>

            <Section dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </Main>
      </Wrapper>
    </>
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
