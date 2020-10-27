import React from 'react';
import styled, { keyframes } from 'styled-components';
import { graphql } from 'gatsby';
import { position } from 'polished';
import Div100vh from 'react-div-100vh';
import lightbulbs from '../assets/images/lightbulbs.png';
import { Social } from '../components/Social';
import { ExternalLink } from '../components/Link';
import { Header } from '../components/Header';
import { Text } from '../components/Text';
import { SEO } from '../components/SEO';
import { MEDIA } from '../styles/media';

const infiniteScroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -300vh, 0);
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
  text-align: center;
`;

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 0 var(--spacing-medium);

  ${MEDIA.tablet`
    left: 50%;
    transform: translate(-50%, -50%);
    paddding: 0 var(--spacing-large);
  `}
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 var(--spacing-medium) var(--spacing-medium);

  ${MEDIA.tablet`
    padding: 0 var(--spacing-huge) var(--spacing-huge);
  `};
`;

const Image = styled.div`
  ${position('absolute', '100%', 0, null, 0)};
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

export default function Home({ data }) {
  const { experience } = data.experienceJson;
  const { author } = data.site.siteMetadata;
  const currentEmployer = experience[0];

  return (
    <>
      <SEO />
      <Wrapper>
        <Header />

        <Main>
          <Section aria-label="Profile">
            <Text as="h1" size="5xl" aria-label={`Name: ${author.name}`}>
              {author.name}
            </Text>
            <Text aria-label={`Position: ${currentEmployer.position}`}>
              {currentEmployer.position}
            </Text>
            <Text size="m"> @ </Text>
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

        <Footer>
          <Social aria-label="Social" />

          <figure aria-hidden="true">
            <Image />
            <Text as="figcaption" size="ps">
              background courtesy of{' '}
              <ExternalLink
                href="https://absurd.design/"
                tabIndex="-1"
                highlight
              >
                absurd.design
              </ExternalLink>
            </Text>
          </figure>
        </Footer>
      </Wrapper>
    </>
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
