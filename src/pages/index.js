import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { position } from 'polished';
import Div100vh from 'react-div-100vh';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { Social } from '../components/Social';
import { ExternalLink } from '../components/Link';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import lightbulbs from '../assets/images/lightbulbs.png';
import { MEDIA } from '../styles/media';
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
  position: relative;
  padding: 2em;
  overflow: hidden;

  ${MEDIA.desktopWide`
    padding: 1em;
  `};
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterSocial = styled(Social)`
  display: flex;
  margin-bottom: 0.5em;

  ${MEDIA.tablet`
    display: none;
  `};
`;

const Image = styled.div`
  ${position('absolute', '100%', 0, null, 0)};
  background-image: url(${lightbulbs});
  background-repeat: repeat-y;
  background-position: center;
  background-size: cover;
  height: 200vh;
  margin-bottom: 100vh;
  opacity: 0.075;
  pointer-events: none;
  animation: ${infiniteScroll} 30s linear infinite;
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
        <Header />
        <Main>
          <section aria-label="Profile">
            <H1 aria-label={`Name: ${name}`}>{name}</H1>
            <Text aria-label={`Position: ${currentEmployer.position}`}>
              {currentEmployer.position}
            </Text>
            <Text> @ </Text>
            <ExternalLink
              aria-label={`Employer: ${currentEmployer.company}`}
              href={currentEmployer.url}
              css="display: inline-block"
              highlight
            >
              {currentEmployer.company}
            </ExternalLink>
            <br />
            <Text aria-label={`Location: ${location}`}>{location}</Text>
          </section>
        </Main>

        <Footer>
          <FooterSocial />

          <figure aria-hidden="true">
            <Image />
            <Text as="figcaption" small>
              background courtesy of{' '}
              <ExternalLink href="https://absurd.design/" highlight>
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
