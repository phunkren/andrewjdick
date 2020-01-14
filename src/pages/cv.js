import React from "react";
import { isBrowser, isIE } from "react-device-detect";
import styled from "styled-components";
import { rgba } from "polished";
import { Layout } from "../components/Layout";
import cv from "../assets/documents/Andrew James CV.pdf";
import { ExternalLink, Link, DownloadLink } from "../components/Link";
import { ColouredContainer } from "../components/ColouredContainer";
import { IconButton } from "../components/Button";
import { DownloadIcon, PrintIcon } from "../components/icons";
import { TitleAndMetaTags } from "../components/TitleAndMetaTags";
import { Rating } from "../components/Rating";
import { Contact } from "../components/Contact";
import { COLORS } from "../styles/colors";
import { MEDIA, BREAKPOINTS } from "../styles/media";
import { H1, H2, H3, Text } from "../styles/typography";
import { CONTACT_DETAILS } from "../constants";
import { EDUCATION, EXPERIENCE, EXPERTISE, INTERESTS, HOBBIES } from "../data";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: ${BREAKPOINTS.desktopWide}px;
  margin: 0 auto;
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 5px 1px ${rgba(COLORS.black, 0.5)};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2em;
  text-align: center;

  ${MEDIA.desktop`
    justify-content: space-between;
    text-align: left;
  `}

  ${MEDIA.print`
    justify-content: space-between;
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

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 1em;
  border-top: 5px solid ${COLORS.black};
  border-bottom: 5px solid ${COLORS.black};

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

const Sidebar = styled.aside`
  ${MEDIA.tablet`
    flex: 0 1 33%;
    border-right: 2px solid ${COLORS.black};
    padding: 0 2em 0 0;
  `};

  ${MEDIA.print`
    flex: 0 1 33%;
    border-right: 2px solid ${COLORS.black};
    padding: 0 2em 0 0;
  `};
`;

const Section = styled.section`
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

const Block = styled.div`
  margin-bottom: 2em;
`;

const BlockHeader = styled(H2)`
  margin-bottom: 0.75em;
  border-bottom: 1px solid ${COLORS.black};
`;

const Description = styled.div`
  ${Text} {
    margin-top: 1em;
    padding-bottom: 0;
  }

  ul {
    padding-left: 1.5em;
    margin-top: 1em;
    list-style-type: circle;
  }
`;

const Tag = styled(Text)`
  border: 1px solid ${COLORS.black};
  border-radius: 5px;
  background-color: ${rgba(COLORS.black, 0.2)};
  text-transform: uppercase;
  padding: 0.5em;
  margin-bottom: 0.5em;
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1em;
  }
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

export default function CV() {
  const { name, position, location } = CONTACT_DETAILS;

  function handleCvPrint() {
    window.print();
  }

  return (
    <Layout>
      <TitleAndMetaTags title="CV" pathname="cv" />
      <ColouredContainer>
        <Container>
          <Header>
            <div>
              <H1>
                <Link to="/" aria-label="Return to homepage">
                  {name}
                </Link>
              </H1>
              <Text as="p">
                {position} | {location}
              </Text>
            </div>

            {isBrowser && !isIE && (
              <HeaderIcons>
                <IconButton onClick={handleCvPrint}>
                  <PrintIcon width="2.5rem" height="2.5rem" />
                </IconButton>
                <DownloadLink
                  css="display: inline-flex; margin-left: 0.5em; padding: 0.5em;"
                  href={cv}
                >
                  <DownloadIcon width="2.5rem" height="2.5rem" />
                </DownloadLink>
              </HeaderIcons>
            )}
          </Header>

          <Content>
            <Sidebar>
              <Block>
                <BlockHeader>Contact</BlockHeader>
                <Contact />
              </Block>

              <Block>
                <BlockHeader>Education</BlockHeader>
                {EDUCATION.map(
                  ({ qualification, course, institute, dates }, index) => (
                    <Block key={`Education-${index}`}>
                      <H3>{qualification}</H3>
                      <Text>{course}</Text>
                      <br />
                      <Text>{institute}</Text>
                      <br />
                      <Text>{dates}</Text>
                      <br />
                    </Block>
                  )
                )}
              </Block>

              <Block>
                <BlockHeader>Expertise</BlockHeader>
                <Block>
                  <Rating skills={EXPERTISE} numberOfStars={5} />
                </Block>
              </Block>

              <Block>
                <BlockHeader>Interests</BlockHeader>

                {INTERESTS.map((interest, index) => (
                  <Tag key={`Interest-${index}`} small>
                    {interest}
                  </Tag>
                ))}
              </Block>

              <Block>
                <BlockHeader>Hobbies</BlockHeader>
                {HOBBIES.map((interest, index) => (
                  <Tag key={`Hobby-${index}`} small>
                    {interest}
                  </Tag>
                ))}
              </Block>

              <Block>
                <BlockHeader>References</BlockHeader>
                <Text>Written references available upon request.</Text>
              </Block>
            </Sidebar>

            <Section>
              <Block>
                <BlockHeader>Profile</BlockHeader>
                <Text>
                  My passion for digital technology continually drives me to
                  advance my skill set as a software engineer. With strong
                  communication and frontend web development skills, I thrive in
                  environments where I can learn from and inspire those around
                  me.
                </Text>
              </Block>

              <BlockHeader>Experience</BlockHeader>
              {EXPERIENCE.map(
                ({ position, company, url, dates, description }, index) => (
                  <Block key={`Experience-${index}`}>
                    <H3>{position}</H3>
                    <Text>
                      <ExternalLink
                        href={url}
                        aria-label={`${company} website`}
                        withHighlight
                      >
                        {company}
                      </ExternalLink>{" "}
                      <Dates>{dates}</Dates>
                    </Text>
                    <Description>{description()}</Description>
                  </Block>
                )
              )}
            </Section>
          </Content>
        </Container>
      </ColouredContainer>
    </Layout>
  );
}
