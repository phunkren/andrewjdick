import React from 'react';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import { ExternalLink } from '../components/Link';
import { Text } from '../components/Text';
import { SEO } from '../components/SEO';
import { MEDIA } from '../styles/media';
import { fadeInAnimation } from '../styles/animation';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section(
  ({ theme }) => css`
    padding: 0 var(--spacing-medium);
    color: ${theme.copyColor};
    ${fadeInAnimation};
  `,
);

const Title = styled(Text)(
  ({ theme }) => css`
    color: ${theme.titleColor};
    text-shadow: ${theme.titleShadow};
  `,
);

const Position = styled(Text)`
  display: block;

  ${MEDIA.tablet`
    display: inline-flex;
  `}
`;

const At = styled(Text)`
  display: none;

  ${MEDIA.tablet`
    display: inline-flex;
  `}
`;

export default function Home({ data }) {
  const { experience } = data.experienceJson;
  const { author } = data.site.siteMetadata;
  const currentEmployer = experience[0];

  return (
    <>
      <SEO bodyAttributes={{ class: 'homepage' }} />
      <Wrapper>
        <Main>
          <Section aria-label="Profile">
            <Title as="h1" size="5xl" aria-label={`Name: ${author.name}`}>
              {author.name}
            </Title>
            <Position
              size="l"
              aria-label={`Position: ${currentEmployer.position}`}
            >
              {currentEmployer.position}
            </Position>
            <At size="l">&nbsp;@&nbsp;</At>
            <ExternalLink
              aria-label={`Employer: ${currentEmployer.company}`}
              href={currentEmployer.url}
              highlight
            >
              <Text size="l">{currentEmployer.company}</Text>
            </ExternalLink>
            <br />
            <Text size="m" aria-label={`Location: ${author.location}`}>
              {author.location}
            </Text>
          </Section>
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
