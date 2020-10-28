import React from 'react';
import styled from 'styled-components';
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
import { fadeInAnimation } from '../styles/animation';

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
  ${fadeInAnimation};
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
  ${fadeInAnimation};

  ${MEDIA.tablet`
    padding: 0 var(--spacing-huge) var(--spacing-huge);
  `};
`;

export default function Home({ data }) {
  const { experience } = data.experienceJson;
  const { author } = data.site.siteMetadata;
  const currentEmployer = experience[0];

  return (
    <>
      <SEO />
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
