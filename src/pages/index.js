import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { graphql } from 'gatsby';
import { position } from 'polished';
import Div100vh from 'react-div-100vh';
import { Layout } from '../components/Layout';
import { Social } from '../components/Social';
import { ExternalLink } from '../components/Link';
import { Text } from '../components/Text';
import SEO from '../components/SEO';
import lightbulbs from '../assets/images/lightbulbs.png';
import { MEDIA } from '../styles/media';

const infiniteScroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -300vh, 0);
  }
`;

/* HACK: For Div100vh to work, we need to remove the min-height from modern-css-reset */
const GlobalStyles = createGlobalStyle`
 body {
   min-height: 0;
 }
`;

const Wrapper = styled(Div100vh)`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA.tablet`
    text-align: center;
  `};
`;

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);

  ${MEDIA.tablet`
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  ${position('fixed', '100%', 0, null, 0)};
  background-image: url(${lightbulbs});
  background-repeat: repeat-y;
  background-position: center;
  background-size: cover;
  height: 200vh;
  margin-bottom: 100vh;
  opacity: 0.025;
  pointer-events: none;
  animation: ${infiniteScroll} 30s linear infinite;
  z-index: -1;
`;

const Break = styled.br`
  ${MEDIA.tablet`
    display: none;
  `}
`;

export default function Home({ data }) {
  const { experience } = data.experienceJson;
  const { author } = data.site.siteMetadata;
  const currentEmployer = experience[0];

  return (
    <Layout>
      <SEO />
      <GlobalStyles />
      <Wrapper>
        <Main>
          <Section aria-label="Profile">
            <Text as="h1" size="5xl" aria-label={`Name: ${author.name}`}>
              {author.name}
            </Text>
            <Text aria-label={`Position: ${currentEmployer.position}`}>
              {currentEmployer.position}
            </Text>
            <Text size="m"> @ </Text>
            <Break />
            <ExternalLink
              aria-label={`Employer: ${currentEmployer.company}`}
              href={currentEmployer.url}
              highlight
            >
              <Text>{currentEmployer.company}</Text>
            </ExternalLink>
            <br />
            <Text aria-label={`Location: ${author.location}`}>
              {author.location}
            </Text>
          </Section>
        </Main>

        <Footer css="padding: 1.5rem;">
          <Social aria-label="Social" css="margin-bottom: 0.5rem;" />

          <figure aria-hidden="true">
            <Image />
            <Text as="figcaption" size="ps">
              background courtesy of{' '}
              <ExternalLink
                href="https://absurd.design/"
                highlight
                tabIndex="-1"
              >
                absurd.design
              </ExternalLink>
            </Text>
          </figure>
        </Footer>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        author {
          name
          location
        }
      }
    }
    experienceJson {
      experience {
        company
        position
        url
      }
    }
  }
`;
