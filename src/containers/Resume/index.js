import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { EDUCATION, EXPERIENCE, EXPERTISE, INTERESTS, HOBBIES } from "./data";
import { Rating } from "./Rating";
import { Contact } from "./Contact";
import {
  Container,
  Content,
  Header,
  Sidebar,
  Section,
  Footer,
  Subtitle,
  Block,
  Link,
  Text,
  Tag,
  H1,
  H2,
  H3
} from "./styles";

export const Resume = () => (
  <Fragment>
    <Helmet>
      <title>Andrew James Dick | Resume</title>
    </Helmet>
    <Container>
      <Header>
        <H1>Andrew James Dick</H1>
        <Subtitle>Frontend Developer | London, UK</Subtitle>
      </Header>
      <Content>
        <Sidebar>
          <Contact />
          <H2>Education</H2>
          {EDUCATION.map(({ qualification, course, institute, dates }) => (
            <Block>
              <H3>{qualification}</H3>
              <Subtitle>{course}</Subtitle>
              <Subtitle>{institute}</Subtitle>
              <Text>{dates}</Text>
            </Block>
          ))}

          <H2>Expertise</H2>
          <Block>
            <Rating />
          </Block>

          <H2>Interests</H2>
          <Block>
            {INTERESTS.map(interest => (
              <Tag>{interest}</Tag>
            ))}
          </Block>

          <H2>Hobbies</H2>
          <Block>
            {HOBBIES.map(interest => (
              <Tag>{interest}</Tag>
            ))}
          </Block>

          <H2>References</H2>
          <Block>
            <Text>Written references available upon request.</Text>
          </Block>
        </Sidebar>

        <Section>
          <H2>Professional Profile</H2>
          <Text>
            My passion for digital technology continually drives me to advance
            my skill set as a software engineer. With strong communication and
            front-end web development skills, I thrive in environments where I
            can learn from and inspire those around me.
          </Text>

          <H2>Work Experience</H2>
          {EXPERIENCE.map(({ position, company, url, dates, description }) => (
            <Block>
              <H3>{position}</H3>
              <Subtitle>
                <Link href={url} target="_blank">
                  {company}
                </Link>{" "}
                / {dates}
              </Subtitle>
              <Text>{description()}</Text>
            </Block>
          ))}
        </Section>
      </Content>
      <Footer>Footer</Footer>
    </Container>
  </Fragment>
);
