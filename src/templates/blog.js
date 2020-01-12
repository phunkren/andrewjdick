import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Layout } from "../components/Layout";
import { TitleAndMetaTags } from "../components/TitleAndMetaTags";
import { Navigation } from "../components/Navigation";
import { Social } from "../components/Social";
import { H2 } from "../styles/typography";
import { MEDIA, BREAKPOINTS } from "../styles/media";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em;

  ${MEDIA.desktopWide`
    padding: 2em;
  `};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  ${MEDIA.tablet`
    justify-content: space-between;
  `};
`;

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;

  ${MEDIA.tablet`
    max-width: ${BREAKPOINTS.phone}px;
  `}

  ${MEDIA.desktop`
    max-width: ${BREAKPOINTS.tablet}px;
  `};
`;

const Article = styled.article``;

function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <TitleAndMetaTags title={frontmatter.title} pathname={frontmatter.path} />

      <Wrapper>
        <Header>
          <Navigation />
          <Social />
        </Header>

        <Section>
            <Text>{fields.readingTime.text}</Text>
          <Article dangerouslySetInnerHTML={{ __html: html }} />
        </Section>
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
            fluid(maxWidth: 576) {
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
