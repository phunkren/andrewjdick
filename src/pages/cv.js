import React from 'react';
import { isMobile, isIE } from 'react-device-detect';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
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
import { Text } from '../components/Text';
import { DownloadIcon, PrintIcon } from '../components/icons';
import { SEO } from '../components/SEO';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { convertPxToRem } from '../utils/unitConversion';
import { Icon } from '../components/icons/Icon';
import { Footer } from '../components/Footer';
import { Theme } from '../components/Theme';

const List = styled.ul`
  margin-bottom: var(--spacing-huge);
`;

const ListItem = styled.li`
  margin-bottom: var(--spacing-medium);

  ${Text} {
    margin-left: var(--spacing-medium);
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  display: inline-flex;
  align-items: center;
`;

const Wrap = styled.div(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.wrapperOverlay};
  `,
);

const Main = styled.main`
  position: relative;
  margin-top: 76px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  max-width: ${convertPxToRem(BREAKPOINTS.desktopWide)};

  ${MEDIA.tablet`
    padding-right: var(--spacing-huge);
    padding-left:  var(--spacing-huge);
  `}

  ${MEDIA.print`
    margin-top: 0;
  `}
`;

const Container = styled.div(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${theme.background};

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      background: ${theme.cardOverlay};
    }

    & > * {
      z-index: 1;
    }

    ${MEDIA.tablet`
      border-radius: 4px;
      margin-bottom: var(--spacing-massive);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, .18);

      &::after {
        border-radius: 4px;
      }
    `}

    ${MEDIA.print`
      margin-bottom: 0;
    `}
  `,
);

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: var(--spacing-huge) var(--spacing-medium);

  ${MEDIA.tablet`
    padding: var(--spacing-huge);
  `}

  ${MEDIA.print`
    padding: var(--spacing-huge);
  `};
`;

const HeaderIcons = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;

    & > ${DownloadLink} {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      min-height: 44px;
    }

    & > * + * {
      margin-left: var(--spacing-medium);
    }

    ${MEDIA.print`
      display: none;
    `};
  `,
);

const Wrapper = styled.div(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    padding: var(--spacing-huge) var(--spacing-medium);
    border-top: 5px solid;
    border-color: ${theme.cvBorderColor};

    ${MEDIA.tablet`
      border-bottom: 5px solid ${theme.cvBorderColor};
      padding: var(--spacing-huge);
    `}

    ${MEDIA.desktop`
      display: inline-flex;
      flex-direction: row;
    `};

    ${MEDIA.print`
      display: inline-flex;
      flex-direction: row;
      padding: var(--spacing-huge);
      border-color: var(--color-black);
    `};
  `,
);

const Sidebar = styled.div(
  ({ theme }) => css`
    ${MEDIA.desktop`
      flex: 0 1 33%;
      border-right: 2px solid 
      border-color: ${theme.cvBorderColor};
      padding: 0 var(--spacing-huge) 0 0;
    `};

    ${MEDIA.print`
      flex: 0 1 33%;
      border-right: 2px solid 
      border-color: var(--color-black);
      padding: 0 var(--spacing-huge) 0 0;
    `};
  `,
);

const Experience = styled.div`
  padding: 0;

  ${MEDIA.desktop`
    flex: 1;
    padding-left: var(--spacing-huge);
  `};

  ${MEDIA.print`
    flex: 1;
    padding-left: var(--spacing-huge);
  `};
`;

const Block = styled.section`
  margin-bottom: var(--spacing-huge);

  ${MEDIA.desktop`
    margin-bottom: var(--spacing-massive);
  `};
`;

const BlockHeader = styled(props => <Text as="h2" size="l" {...props} />)(
  ({ theme }) => css`
    margin-bottom: var(--spacing-large);
    border-bottom: 1px solid ${theme.borderColor};
    color: ${theme.headerColor};

    ${MEDIA.print`
      color: var(--color-black);
    `}
  `,
);

const BlockSubheader = styled(Text)(
  ({ theme }) => css`
    color: ${theme.cvSubheaderColor};

    ${MEDIA.print`
      color: var(--color-black);
    `}
  `,
);

const Description = styled.div`
  ${Text} {
    margin-top: var(--spacing-large);
    padding-bottom: 0;
  }

  ul {
    padding-left: var(--spacing-large);
    margin-top: var(--spacing-small);
    margin-bottom: 0;
  }
`;

const Tag = styled(props => <Text size="xs" {...props} />)(
  ({ theme }) => css`
    padding: var(--spacing-small);
    border-radius: 4px;
    text-align: center;
    border: 1px solid;
    border-color: ${theme.borderColor};
    color: ${theme.copyColor};

    ${MEDIA.print`
      color: var(--color-black);
      border-color: var(--color-gray-400);
    `}
  `,
);

const TagContainer = styled.div`
  display: grid;
  grid-column-gap: var(--spacing-small);
  grid-row-gap: var(--spacing-small);

  ${MEDIA.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const Dates = styled(Text)(
  ({ theme }) => css`
    display: block;
    color: ${theme.auxiliaryColor};

    ${MEDIA.tablet`
      display: inline-block;
      position: relative;
      margin-left: var(--spacing-huge);
    `};
  `,
);

const ExperienceInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  > * {
    margin-top: var(--spacing-tiny);
  }

  ${MEDIA.tablet`
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 0;
  `};

  ${MEDIA.print`
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 0;
  `}
`;

const AuthorInfo = styled(Text)(
  ({ theme }) => css`
    color: ${theme.auxiliaryColor};
  `,
);

const Title = styled(Text)`
  color: var(--color-white);
  margin-bottom: var(--spacing-large);
  text-align: center;

  ${MEDIA.tablet`
    opacity: 0;
    pointer-events: none;
  `}

  ${MEDIA.print`
    display: none;
  `}
`;
export default function CV({ data, location: { pathname } }) {
  const { education } = data.educationJson;
  const { experience } = data.experienceJson;
  const { social } = data.socialJson;
  const { author, siteUrl } = data.site.siteMetadata;
  const currentPosition = experience[0].position;
  const siteDisplayUrl = siteUrl.split('https://')[1];
  const expertise = ['html', 'css/scss', 'javascript', 'react'];
  const interests = ['design systems', 'a11y', 'graphQL', 'react native'];
  const hobbies = ['cycling', 'guitar', 'gaming', 'writing'];

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
    <>
      <SEO
        path={pathname}
        title="CV"
        description="An overview of my experience and technical expertise"
      />
      <Header variant="dark" />

      <Wrap>
        <Hero />
        <Main>
          <Title as="h1" size="4xl" id="cv">
            CV
          </Title>
          <Container>
            <Heading>
              <div>
                <Text
                  as="h1"
                  size="4xl"
                  css={`
                    color: ${({ theme }) => theme.headerColor};

                    ${MEDIA.print`
                      color: var(--color-black);
                    `}
                  `}
                >
                  {author.name}
                </Text>
                <AuthorInfo size="m">
                  {currentPosition} / {author.location}
                </AuthorInfo>
              </div>

              <HeaderIcons aria-label="Export CV">
                {!isMobile && !isIE && (
                  <>
                    <IconButton aria-label="Print" onClick={handleCvPrint}>
                      <PrintIcon width="2rem" height="2rem" />
                    </IconButton>

                    <DownloadLink
                      aria-label="Download"
                      href={cv}
                      onClick={handleCvDownload}
                    >
                      <DownloadIcon width="2rem" height="2rem" />
                    </DownloadLink>
                  </>
                )}
              </HeaderIcons>
            </Heading>

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
                          <EmailIcon width="1.5rem" height="1.5rem" />
                          <Text size="s">{author.email}</Text>
                        </StyledExternalLink>
                      </ListItem>

                      <ListItem>
                        <StyledExternalLink
                          href={siteUrl}
                          aria-label="Return to homepage"
                        >
                          <HomeIcon width="1.5rem" height="1.5rem" />
                          <Text size="s">{siteDisplayUrl}</Text>
                        </StyledExternalLink>
                      </ListItem>

                      <ListItem>
                        <StyledExternalLink
                          href={social.github.url}
                          aria-label={`${social.github.label} profile`}
                        >
                          <GitHubIcon width="1.5rem" height="1.5rem" />
                          <Text size="s">{social.github.handle}</Text>
                        </StyledExternalLink>
                      </ListItem>

                      <ListItem>
                        <StyledExternalLink
                          href={social.linkedIn.url}
                          aria-label={`${social.linkedIn.label} profile`}
                        >
                          <LinkedInIcon width="1.5rem" height="1.5rem" />
                          <Text size="s">{social.linkedIn.handle}</Text>
                        </StyledExternalLink>
                      </ListItem>
                    </List>
                  </nav>
                </Block>

                <Block aria-labelledby="cv-education">
                  <BlockHeader id="cv-education">Education</BlockHeader>
                  {education.map(
                    ({ qualification, course, institute, dates }, index) => (
                      <Block
                        key={institute}
                        css={`
                          display: flex;
                          flex-flow: column;
                          margin-bottom: var(--spacing-large);
                          margin-top: ${index === 1 &&
                            `calc(var(--spacing-large) * -1)`};

                          ${MEDIA.print`
                            margin-top: ${index === 1 &&
                              `var(--spacing-large)`};
                          `}
                        `}
                        aria-labelledby={`cv-education edu-${formatId(
                          institute,
                        )}`}
                      >
                        {qualification && (
                          <BlockSubheader
                            as="h3"
                            size="m"
                            id={`edu-${formatId(qualification)}`}
                          >
                            {qualification}
                          </BlockSubheader>
                        )}
                        <Text size="ps">{course}</Text>
                        <Text size="ps">{institute}</Text>
                        <Text
                          css={`
                            color: ${({ theme }) => theme.auxiliaryColor};
                          `}
                          size="xs"
                        >
                          {dates}
                        </Text>
                      </Block>
                    ),
                  )}
                </Block>

                <Block aria-labelledby="cv-expertise">
                  <BlockHeader id="cv-expertise">Expertise</BlockHeader>
                  <TagContainer>
                    {expertise.map((skill, index) => (
                      <Tag key={`Skill-${index}`}>{skill}</Tag>
                    ))}
                  </TagContainer>
                </Block>

                <Block
                  aria-labelledby="cv-interests"
                  css={`
                    ${MEDIA.print`padding-top: var(--spacing-huge);`}
                  `}
                >
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
                    advance my skill set as a software engineer. With an
                    analytical mindset and strong communication and frontend
                    development skills, I thrive in environments where I can
                    learn from others and inspire those around me.
                  </Text>

                  <Text as="p" css="margin-top: var(--spacing-medium);">
                    Over the years I&#39;ve refined a set of technical
                    principles to strive towards, namely: complexity should only
                    be introduced when it’s unavoidable; code should be easy to
                    reason with and delete; avoid abstracting too early, and the
                    top priority is always the best possible user experience.
                  </Text>
                </Block>

                <Block>
                  <BlockHeader id="cv-experience">Experience</BlockHeader>
                  {experience.map(
                    ({ position, company, url, dates, blurb, portfolio }) => (
                      <Block
                        key={company}
                        aria-label={`exp-${formatId(company)}`}
                        aria-labelledby={`cv-experience exp-${formatId(
                          company,
                        )}`}
                        css="margin-bottom: var(--spacing-massive);"
                      >
                        <BlockSubheader
                          as="h3"
                          size="xl"
                          id={`exp-${formatId(company)}`}
                        >
                          {position}
                        </BlockSubheader>
                        <ExperienceInfo>
                          <ExternalLink
                            href={url}
                            aria-label={`${company} website`}
                            highlight
                          >
                            <Text>{company}</Text>
                          </ExternalLink>{' '}
                          <Dates size="xs">{dates}</Dates>
                        </ExperienceInfo>
                        <Description>
                          {blurb ? <Text as="p">{blurb}</Text> : null}

                          {portfolio ? (
                            <>
                              <Text as="h4" size="m">
                                Notable work
                              </Text>
                              <ul>
                                {portfolio.map(({ name, href }) => (
                                  <li key={name}>
                                    <ExternalLink href={href}>
                                      <Text size="pb">{name}</Text>
                                    </ExternalLink>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : null}
                        </Description>
                      </Block>
                    ),
                  )}
                </Block>
              </Experience>
            </Wrapper>
          </Container>
        </Main>
      </Wrap>
      <Footer />
    </>
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
        siteUrl
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
