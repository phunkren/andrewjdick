import React, { Fragment } from "react";
import { isBrowser, isIE } from "react-device-detect";
import { Spring } from "react-spring/renderprops";
import { ExternalLink, Link } from "components/Link";
import { ColouredContainer } from "components/ColouredContainer";
import { DownloadIcon } from "components/icons";
import { TitleAndMetaTags } from "components/TitleAndMetaTags";
import { EDUCATION, EXPERIENCE, EXPERTISE, INTERESTS, HOBBIES } from "./data";
import { Rating } from "./Rating";
import { Contact } from "./Contact";
import { CONTACT_DETAILS } from "constants.js";
import {
  Container,
  Content,
  Dates,
  Header,
  HeaderTitle,
  HeaderIcons,
  Sidebar,
  Section,
  Subtitle,
  Description,
  MobileH2,
  Block,
  Text,
  Tag,
  H1,
  H2,
  H3
} from "./styles";

export const CV = () => {
  const { name, position, location } = CONTACT_DETAILS;

  return (
    <Fragment>
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
    </Fragment>
  );
};
