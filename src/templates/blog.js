import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';
import { SEO } from '../components/SEO';
import { Text } from '../components/Text';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { linkStyles } from '../components/Link';
import { SIZES } from '../components/Text';
import { convertPxToRem } from '../utils/unitConversion';
import { FadeIn } from '../components/Animation';
import { Hero } from '../components/Hero';
import { animated } from 'react-spring/renderprops';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-huge) var(--spacing-medium) var(--spacing-massive);
  margin: 400px auto 0;
  width: 100%;

  ${MEDIA.desktop`
    padding: var(--spacing-huge) var(--spacing-huge) var(--spacing-massive);
  `};
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: -84px auto 0;

  > * + * {
    margin-top: var(--spacing-medium);
  }

  ${MEDIA.tablet`
    max-width: ${convertPxToRem(BREAKPOINTS.tablet)};
  `}
`;

const Title = styled(Text)`
  position: absolute;
  top: 204px;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  left: 50%;
  text-shadow: 1px 1px 1px var(--color-black);
  width: 100%;
  padding: 0 var(--spacing-large);

  ${MEDIA.tablet`
    max-width: 80%;
  `}

  ${MEDIA.desktop`
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
    h2,
    h3,
    h4 {
      color: ${theme.cardHeaderColor};
    }

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
        overflow-y: auto;
      }

      pre code {
        padding: var(--spacing-medium);
      }

      ${MEDIA.tablet`
        max-width: calc(100% + var(--spacing-medium) + var(--spacing-huge));

        pre {
          border-radius: 4px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
        }
      `}

      ${MEDIA.desktop`
        margin-left: calc(var(--spacing-huge) * -1);
        max-width: calc(100% + var(--spacing-huge) + var(--spacing-huge));
      `}
    }

    a:not(.gatsby-resp-image-link) {
      ${linkStyles};
      color: ${theme.linkColor};
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
      ${SIZES['pb']};
      font-weight: 600;
      color: inherit;
      background-color: transparent;
      padding: 0;
    }

    pre > code[class*='language-'] {
      ${SIZES['ps']};
      margin-left: calc(var(--spacing-medium) * -1);
      width: 100%;
    }

    pre[class*='language-'] {
      margin: 0;
      padding: var(--spacing-medium);

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

  const customHero = {
    image: data?.markdownRemark?.frontmatter?.image,
    alt: data?.markdownRemark?.frontmatter?.imageAlt,
  };

  useEffect(() => {
    const codeBlocks = document.getElementsByTagName('pre');

    for (let codeBlock of codeBlocks) {
      codeBlock.setAttribute('tabindex', '0');
    }
  }, []);

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

      <Hero variant="post" customHero={customHero} />

      <Wrapper>
        <Main>
          <article>
            <FadeIn>
              {({ o }) => (
                <animated.div style={{ opacity: o.interpolate(o => o) }}>
                  <Title as="h1" size="xxxl">
                    {frontmatter.title}
                  </Title>
                </animated.div>
              )}
            </FadeIn>

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
