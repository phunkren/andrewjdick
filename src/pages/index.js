import React from 'react';
import { animated } from 'react-spring/renderprops';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import { ExternalLink } from '../components/Link';
import { Text } from '../components/Text';
import { SEO } from '../components/SEO';
import { MEDIA } from '../styles/media';
import { Reveal } from '../components/Transition';

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

const Section = styled(animated.section)`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 0 var(--spacing-medium);
  color: var(--color-white);

  ${MEDIA.tablet`
    left: 50%;
    transform: translate(-50%, -50%);
    paddding: 0 var(--spacing-large);
  `}
`;

const Title = styled(Text)`
  color: var(--color-orange-400);
  text-shadow: 2px 2px var(--color-charcoal);
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
          <Reveal>
            {styles => (
              <Section aria-label="Profile" style={styles}>
                <Title as="h1" size="5xl" aria-label={`Name: ${author.name}`}>
                  {author.name}
                </Title>
                <Text
                  size="m"
                  aria-label={`Position: ${currentEmployer.position}`}
                >
                  {currentEmployer.position}
                </Text>
                <Text size="m"> @ </Text>
                <ExternalLink
                  aria-label={`Employer: ${currentEmployer.company}`}
                  href={currentEmployer.url}
                  highlight
                >
                  <Text size="m">{currentEmployer.company}</Text>
                </ExternalLink>
                <br />
                <Text aria-label={`Location: ${author.location}`}>
                  {author.location}
                </Text>
              </Section>
            )}
          </Reveal>
        </Main>
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
