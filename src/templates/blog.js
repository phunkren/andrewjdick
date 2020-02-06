import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { H1, Text } from '../styles/typography';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { COLORS } from '../styles/colors';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2em;

  ${MEDIA.desktopWide`
    padding: 1em;
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

const Article = styled.article`
  a {
    color: inherit;
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

  code {
    font-size: 1rem;
  }
`;

function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, fields, html } = markdownRemark;

  return (
    <Layout>
      <TitleAndMetaTags title={frontmatter.title} pathname={frontmatter.path} />

      <Wrapper>
        <Header />
        <Main>
          <div>
            <H1 css="margin-bottom: 0.25em;">{frontmatter.title}</H1>
            <Text>{frontmatter.date}</Text> |{' '}
            <Text>{fields.readingTime.text}</Text>
          </div>

          <Img fluid={frontmatter.image.childImageSharp.fluid} />

          <Article dangerouslySetInnerHTML={{ __html: html }} />
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
