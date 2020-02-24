import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { position } from 'polished';
import Div100vh from 'react-div-100vh';
import { Layout } from '../components/Layout';
import { Social } from '../components/Social';
import { ExternalLink } from '../components/Link';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import lightbulbs from '../assets/images/lightbulbs.png';
import { H1, Text } from '../styles/typography';
import { CONTACT_DETAILS } from '../constants';
import { EXPERIENCE } from '../data';

const infiniteScroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -300vh, 0);
  }
`;

/* HACK: For Div100vh to work, we need to remove the min-height from modern-css-reset */
const GlobalStyles = createGlobalStyle`
 body {
   min-height: 0;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Section = styled.section`
  position: relative;
  top: 40px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 0 2em 1em;
`;

const Image = styled.div`
  ${position('fixed', '100%', 0, null, 0)};
  background-image: url(${lightbulbs});
  background-repeat: repeat-y;
  background-position: center;
  background-size: cover;
  height: 200vh;
  margin-bottom: 100vh;
  opacity: 0.075;
  pointer-events: none;
  animation: ${infiniteScroll} 30s linear infinite;
  z-index: -1;
`;

export default function Home() {
  const { name, location } = CONTACT_DETAILS;
  const currentEmployer = EXPERIENCE[0];
  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <TitleAndMetaTags />
      <GlobalStyles />
      <Wrapper>
        <Main>
          <Section aria-label="Profile">
            <H1 aria-label={`Name: ${name}`}>{name}</H1>
            <Text aria-label={`Position: ${currentEmployer.position}`}>
              {currentEmployer.position}
            </Text>
            <Text> @ </Text>
            <ExternalLink
              aria-label={`Employer: ${currentEmployer.company}`}
              href={currentEmployer.url}
              highlight
            >
              {currentEmployer.company}
            </ExternalLink>
            <br />
            <Text aria-label={`Location: ${location}`}>{location}</Text>
          </Section>
        </Main>

        <Footer>
          <Social aria-label="Social" />

          <figure aria-hidden="true">
            <Image />
            <Text as="figcaption" small>
              background courtesy of{' '}
              <ExternalLink
                href="https://absurd.design/"
                highlight
                tabIndex="-1"
              >
                absurd.design
              </ExternalLink>
            </Text>
          </figure>

          <Text as="p" small>
            &copy; {currentYear}
          </Text>
        </Footer>
      </Wrapper>
    </Layout>
  );
}
