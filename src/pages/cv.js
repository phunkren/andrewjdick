import React, { Fragment } from "react";
import { isBrowser, isIE } from "react-device-detect";
import { Spring } from "react-spring/renderprops";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { COLORS, ALPHAS } from "../constants.js";
import { media } from "../media.js";
import { Layout } from "../components/Layout";
import { ExternalLink, Link } from "../components/Link";
import { ColouredContainer } from "../components/ColouredContainer";
import { DownloadIcon } from "../components/icons";
import { TitleAndMetaTags } from "../components/TitleAndMetaTags";
import { Rating } from "../components/Rating";
import { Contact } from "../components/Contact";
import { CONTACT_DETAILS } from "../constants";
import { EDUCATION, EXPERIENCE, EXPERTISE, INTERESTS, HOBBIES } from "../data";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5em;
  text-align: center;

  ${isBrowser
    ? css`
        justify-content: space-between;
        text-align: left;
      `
    : undefined}

  ${media.print`
    padding: 2.5em 1em;
    text-align: left;
  `};
`;

const HeaderTitle = styled.div``;

const HeaderIcons = styled.div`
  ${media.print`
    display: none;
  `};
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 1.5em;
  border-top: 5px solid ${COLORS.black};
  border-bottom: 5px solid ${COLORS.black};

  p,
  li {
    padding: 0;
    line-height: 1.75rem;
    color: #333;
  }

  ${media.tablet`
    display: inline-flex;
    flex-direction: row;
    padding: 1em;
  `};

  ${media.print`
    display: inline-flex;
    flex-direction: row;
    padding: 1em 0 0;
  `};
`;

const Sidebar = styled.aside`
  ${media.tablet`
    flex: 0 1 25%;
    margin-right: 1em;
    border-right: 2px solid ${COLORS.black};
    padding: 1em 2em 2em 1em;
  `};

  ${media.desktop`
    padding: 2em 4em 2em 1em;
  `};

  ${media.print`
    flex: 0 1 25%;
    margin-right: 1em;
    border-right: 2px solid ${COLORS.black};
    padding: 1em 2em 2em 1em;
  `};
`;

const Section = styled.article`
  padding: 0;

  ${media.tablet`
    flex: 1;
    padding: 1em;
  `};

  ${media.desktop`
    flex: 1;
    padding: 2em 3em;
  `};

  ${media.print`
    flex: 1;
    padding: 1em;
  `};
`;

const Block = styled.div`
  margin-bottom: 2em;

  ${media.print`
    margin-bottom: 1.5em;
  `};
`;

const H1 = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 2.5rem;
  margin-bottom: 0;

  ${media.tablet`
    font-size: 3rem;
    line-height: 4rem;
  `};

  ${media.print`
    font-size: 3rem;
    line-height: 4rem;
  `};
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.5rem;
  border-bottom: 1px solid ${COLORS.black};
`;

const MobileH2 = styled(H2)`
  ${media.tablet`
    display: none;
  `};

  ${media.print`
    display: none;
  `};
`;

const H3 = styled.h3`
  margin-bottom: 0.5em;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: uppercase;
`;

const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.6rem;

  p {
    margin-top: 1.1em;
    padding-bottom: 0;
  }

  ${media.tablet`
    font-size: 1.2rem;
    line-height: 1.8rem;
  `};

  ul {
    padding: 0 0 0 2em;
    margin-top: 1em;
    list-style-type: circle;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6rem;

  ${media.tablet`
    font-size: 1.2rem;
    line-height: 1.8rem;
  `};
`;

const Subtitle = styled.p`
  padding-bottom: 0.5em;
  font-size: 1.1rem;
  line-height: 1.3rem;
`;

const Tag = styled.div`
  border: 1px solid ${COLORS.black};
  border-radius: 5px;
  background-color: ${rgba(COLORS.cadetBlue, ALPHAS.disabled)};
  text-transform: uppercase;
  padding: 0.5em;
  margin-bottom: 0.5em;
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;

  &:not(:last-child) {
    margin-right: 1em;
  }

  ${media.print`
    font-size: 0.8rem;
  `};
`;

const Dates = styled.span`
  display: block;
  margin-top: 0.5em;

  ${media.tablet`
    display: inline-block;
    margin-top: 0;

    &:before {
      content: ' / '
    }
  `};

  ${media.print`
    display: inline-block;
    margin-top: 0;

    &:before {
      content: ' / '
    }
  `};
`;

export default function CV() {
  const { name, position, location } = CONTACT_DETAILS;

  return (
    <Layout>
      <TitleAndMetaTags title="CV" pathname="cv" />
      <ColouredContainer>
        <Container>
          <Spring delay={500} from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => (
              <Fragment>
                <Header style={props}>
                  <HeaderTitle>
                    <Link
                      href="/"
                      alt="Return to homepage"
                      aria-label="Return to homepage"
                    >
                      <H1>{name}</H1>
                    </Link>
                    <Subtitle>
                      {position} | {location}
                    </Subtitle>
                  </HeaderTitle>

                  {isBrowser && !isIE && (
                    <HeaderIcons>
                      <Link
                        alt="Download my CV"
                        href="/AndrewJames-CV.pdf"
                        aria-label="Download my CV"
                        download
                      >
                        <DownloadIcon width="2.25em" height="2.25em" />
                      </Link>
                    </HeaderIcons>
                  )}
                </Header>
                <Content style={props}>
                  <Sidebar>
                    <Block>
                      <MobileH2>Contact</MobileH2>
                      <Contact />
                    </Block>

                    <Block>
                      <H2>Education</H2>
                      {EDUCATION.map(
                        (
                          { qualification, course, institute, dates },
                          index
                        ) => (
                          <Block key={`Education-${index}`}>
                            <H3>{qualification}</H3>
                            <Subtitle>{course}</Subtitle>
                            <Subtitle>{institute}</Subtitle>
                            <Text>{dates}</Text>
                          </Block>
                        )
                      )}
                    </Block>

                    <Block>
                      <H2>Expertise</H2>
                      <Block>
                        <Rating skills={EXPERTISE} numberOfStars={5} />
                      </Block>
                    </Block>

                    <Block>
                      <H2>Interests</H2>
                      <Block>
                        {INTERESTS.map((interest, index) => (
                          <Tag key={`Interest-${index}`}>{interest}</Tag>
                        ))}
                      </Block>
                    </Block>

                    <Block>
                      <H2>Hobbies</H2>
                      <Block>
                        {HOBBIES.map((interest, index) => (
                          <Tag key={`Hobby-${index}`}>{interest}</Tag>
                        ))}
                      </Block>
                    </Block>

                    <Block>
                      <H2>References</H2>
                      <Block>
                        <Text>Written references available upon request.</Text>
                      </Block>
                    </Block>
                  </Sidebar>

                  <Section>
                    <Block>
                      <H2>Professional Profile</H2>
                      <Text>
                        My passion for digital technology continually drives me
                        to advance my skill set as a software engineer. With
                        strong communication and frontend web development
                        skills, I thrive in environments where I can learn from
                        and inspire those around me.
                      </Text>
                    </Block>

                    <Block>
                      <H2>Work Experience</H2>
                      {EXPERIENCE.map(
                        (
                          { position, company, url, dates, description },
                          index
                        ) => (
                          <Block key={`Experience-${index}`}>
                            <H3>{position}</H3>
                            <Subtitle>
                              <ExternalLink
                                href={url}
                                alt={`${company} website`}
                                aria-label={`${company} website`}
                                withHighlight
                              >
                                {company}
                              </ExternalLink>{" "}
                              <Dates>{dates}</Dates>
                            </Subtitle>
                            {description && (
                              <Description>{description()}</Description>
                            )}
                          </Block>
                        )
                      )}
                    </Block>
                  </Section>
                </Content>
              </Fragment>
            )}
          </Spring>
        </Container>
      </ColouredContainer>
    </Layout>
  );
}
