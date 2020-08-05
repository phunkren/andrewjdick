import React from 'react';
import { isBrowser, isIE } from 'react-device-detect';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { Layout } from '../components/Layout';
import cv from '../assets/documents/Andrew James CV.pdf';
import { formatId } from '../utils/formatId';
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  HomeIcon,
} from '../components/icons';
import { ExternalLink, DownloadLink } from '../components/Link';
import { IconButton } from '../components/Button';
import { DownloadIcon, PrintIcon } from '../components/icons';
import SEO from '../components/SEO';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { H1, H2, H3, H4, Text } from '../styles/typography';

const List = styled.ul`
  margin-bottom: 2em;
`;

const ListItem = styled.li`
  margin-bottom: 1em;

  ${Text} {
    margin-left: 1em;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  display: inline-flex;
  align-items: center;
  color: inherit;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: ${BREAKPOINTS.desktopWide}px;
  margin: 0 auto;

  ${MEDIA.desktopWide`
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .2);
  `}
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 2em 2em;
  text-align: center;

  ${MEDIA.desktop`
    justify-content: space-between;
    text-align: left;
  `}

  ${MEDIA.desktop`
    padding: 2em;
  `}

  ${MEDIA.print`
    justify-content: space-between;
    padding: 2em;
    text-align: left;
  `};
`;

const HeaderIcons = styled.div`
  display: none;

  ${MEDIA.desktop`
    display: block;
  `};

  ${MEDIA.print`
    display: none;
  `};
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 1em;
  border-top: 5px solid var(--color-black);
  border-bottom: 5px solid var(--color-black);

  ${MEDIA.tablet`
    display: inline-flex;
    flex-direction: row;
    padding: 2em;
  `};

  ${MEDIA.print`
    display: inline-flex;
    flex-direction: row;
    padding: 2em;
  `};
`;

const Sidebar = styled.div`
  ${MEDIA.tablet`
    flex: 0 1 33%;
    border-right: 2px solid var(--color-black);
    padding: 0 2em 0 0;
  `};

  ${MEDIA.print`
    flex: 0 1 33%;
    border-right: 2px solid var(--color-black);
    padding: 0 2em 0 0;
  `};
`;

const Experience = styled.div`
  padding: 0;

  ${MEDIA.tablet`
    flex: 1;
    padding-left: 2em;
  `};

  ${MEDIA.print`
    flex: 1;
    padding-left: 2em;
  `};
`;

const Block = styled.section`
  margin-bottom: 2em;
`;

const BlockHeader = styled(H2)`
  margin-bottom: 0.75em;
  border-bottom: 1px solid var(--color-gray-400);
`;

const Description = styled.div`
  ${Text}, ${H4} {
    margin-top: 1em;
    padding-bottom: 0;
  }

  ul {
    padding-left: 1.5em;
    margin-top: 0.5em;
    list-style-type: circle;
  }
`;

const Tag = styled(Text).attrs(() => ({
  small: true,
}))`
  padding: 0.5em;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: center;
  background-color: var(--color-gray-400);

  ${MEDIA.print`
    border: 1px solid var(--color-black);
    background-color: transparent;
  `}
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${Tag} {
    flex: 1 0 100%;
    margin-bottom: 0.5em;
  }

  ${MEDIA.tablet`
    flex-direction: row;
    justify-content: space-between;
      
    ${Tag} {
      flex: 0 1 calc(50% - 0.5em);
    }
  `}
`;

const Dates = styled(Text)`
  display: block;

  ${MEDIA.tablet`
    display: inline-block;

    &:before {
      content: ' / '
    }
  `};
`;

export default function CV({ data }) {
  const { education } = data.educationJson;
  const { experience } = data.experienceJson;
  const { social } = data.socialJson;
  const { author, url } = data.site.siteMetadata;

  const currentPosition = experience[0].position;
  const siteDisplayUrl = url.split('https://')[1];
  const expertise = ['html', 'css/scss', 'javascript', 'react'];
  const interests = ['react native', 'gatsbyjs', 'graphQL', 'css-in-js'];
  const hobbies = ['cycling', 'guitar', 'video games', 'rugby'];

  function handleCvPrint() {
    trackCustomEvent({
      category: 'CV print button',
      action: 'Click',
      label: 'Print',
    });

    window.print();
  }

  function handleCvDownload() {
    trackCustomEvent({
      category: 'CV download link',
      action: 'Click',
    });
  }

  return (
    <Layout>
      <SEO title="CV" pathname="/cv" />
      <Container as="main">
        <Title>
          <div>
            <H1>{author.name}</H1>
            <Text as="p">
              {currentPosition} | {author.location}
            </Text>
          </div>

          {isBrowser && !isIE && (
            <HeaderIcons aria-label="Export CV">
              <IconButton aria-label="Print" onClick={handleCvPrint}>
                <PrintIcon width="2.5rem" height="2.5rem" />
              </IconButton>
              <DownloadLink
                aria-label="Download"
                href={cv}
                css="display: inline-flex; margin-left: 0.5em; padding: 0.5em; color: inherit;"
                onClick={handleCvDownload}
              >
                <DownloadIcon width="2.5rem" height="2.5rem" />
              </DownloadLink>
            </HeaderIcons>
          )}
        </Title>

        <Wrapper>
          <Sidebar>
            <Block aria-labelledby="cv-contact">
              <BlockHeader id="cv-contact">Contact</BlockHeader>
              <nav aria-label="Contact">
                <List>
                  <ListItem>
                    <StyledExternalLink
                      href={`mailto:${author.email}`}
                      aria-label="Email me"
                    >
                      <EmailIcon />
                      <Text>{author.email}</Text>
                    </StyledExternalLink>
                  </ListItem>

                  <ListItem>
                    <StyledExternalLink
                      href={url}
                      aria-label="Return to homepage"
                    >
                      <HomeIcon />
                      <Text>{siteDisplayUrl}</Text>
                    </StyledExternalLink>
                  </ListItem>

                  <ListItem>
                    <StyledExternalLink
                      href={social.github.url}
                      aria-label={`${social.github.label} profile`}
                    >
                      <GitHubIcon />
                      <Text>{social.github.handle}</Text>
                    </StyledExternalLink>
                  </ListItem>

                  <ListItem>
                    <StyledExternalLink
                      href={social.linkedIn.url}
                      aria-label={`${social.linkedIn.label} profile`}
                    >
                      <LinkedInIcon />
                      <Text>{social.linkedIn.handle}</Text>
                    </StyledExternalLink>
                  </ListItem>
                </List>
              </nav>
            </Block>

            <Block aria-labelledby="cv-education">
              <BlockHeader id="cv-education">Education</BlockHeader>
              {education.map(({ qualification, course, institute, dates }) => (
                <Block
                  key={institute}
                  aria-labelledby={`cv-education edu-${formatId(
                    qualification,
                  )}`}
                >
                  <H3 id={`edu-${formatId(qualification)}`}>{qualification}</H3>
                  <Text>{course}</Text>
                  <br />
                  <Text>{institute}</Text>
                  <br />
                  <Text>{dates}</Text>
                  <br />
                </Block>
              ))}
            </Block>

            <Block aria-labelledby="cv-expertise">
              <BlockHeader id="cv-expertise">Expertise</BlockHeader>
              <TagContainer>
                {expertise.map((skill, index) => (
                  <Tag key={`Skill-${index}`}>{skill}</Tag>
                ))}
              </TagContainer>
            </Block>

            <Block aria-labelledby="cv-interests">
              <BlockHeader id="cv-interests">Interests</BlockHeader>
              <TagContainer>
                {interests.map((interest, index) => (
                  <Tag key={`Interest-${index}`}>{interest}</Tag>
                ))}
              </TagContainer>
            </Block>

            <Block aria-labelledby="cv-hobbies">
              <BlockHeader id="cv-hobbies">Hobbies</BlockHeader>
              <TagContainer>
                {hobbies.map((hobby, index) => (
                  <Tag key={`Hobby-${index}`}>{hobby}</Tag>
                ))}
              </TagContainer>
            </Block>

            <Block aria-labelledby="cv-references">
              <BlockHeader id="cv-references">References</BlockHeader>
              <Text>Written references available on request.</Text>
            </Block>
          </Sidebar>

          <Experience>
            <Block aria-labelledby="cv-profile">
              <BlockHeader id="cv-profile">Profile</BlockHeader>
              <Text as="p">
                My passion for digital technology continually drives me to
                advance my skill set as a software engineer. With an analytical
                mindset and strong communication and frontend development
                skills, I thrive in environments where I can learn from others
                and inspire those around me.
              </Text>

              <Text as="p" css="margin-top: 1em">
                Over the years I&#39;ve refined a set of technical principles to
                strive towards, namely: complexity should only be introduced
                when it’s unavoidable; code should be easy to reason with and
                delete; avoid abstracting too early, and the top priority is
                always the best possible user experience.
              </Text>
            </Block>

            <Block>
              <BlockHeader id="cv-experience">Experience</BlockHeader>
              {experience.map(
                ({ position, company, url, dates, blurb, portfolio }) => (
                  <Block
                    key={company}
                    aria-labelledby={`cv-experience exp-${formatId(company)}`}
                  >
                    <H3 id={`exp-${formatId(company)}`}>{position}</H3>
                    <ExternalLink
                      href={url}
                      aria-label={`${company} website`}
                      highlight
                    >
                      {company}
                    </ExternalLink>{' '}
                    <Dates>{dates}</Dates>
                    <Description>
                      <Text as="p">{blurb}</Text>
                      <H4>Notable work</H4>
                      <ul>
                        {portfolio.map(({ name, href }) => (
                          <li key={name}>
                            <ExternalLink href={href} highlight>
                              {name}
                            </ExternalLink>
                          </li>
                        ))}
                      </ul>
                    </Description>
                  </Block>
                ),
              )}
            </Block>
          </Experience>
        </Wrapper>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query CvQuery {
    site {
      siteMetadata {
        author {
          name
          location
          email
        }
        url
      }
    }
    educationJson {
      education {
        course
        dates
        institute
        qualification
      }
    }
    experienceJson {
      experience {
        blurb
        company
        dates
        portfolio {
          href
          name
        }
        position
        url
      }
    }
    socialJson {
      social {
        github {
          handle
          label
          url
        }
        linkedIn {
          handle
          label
          url
        }
      }
    }
  }
`;
