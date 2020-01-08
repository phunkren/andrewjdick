import React, { useEffect, useState } from "react";
import { Transition, config } from "react-spring/renderprops";
import styled, { keyframes } from "styled-components";
import { position } from "polished";
import { animated } from "react-spring/renderprops";
import { Layout } from "../components/Layout";
import { Social } from "../components/Social";
import homeBackground from "../assets/images/homeBackground.png";
import { ExternalLink } from "../components/Link";
import { TitleAndMetaTags } from "../components/TitleAndMetaTags";
import { Navigation } from "../components/Navigation";
import { MEDIA } from "../styles/media";
import { H1, Text } from "../styles/typography";
import { CONTACT_DETAILS } from "../constants";
import { EXPERIENCE } from "../data";

const infiniteScroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -1920px, 0);
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 2em;

  ${MEDIA.desktopWide`
    padding: 1em;
  `};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA.tablet`
    justify-content: space-between;
  `};
`;

const Section = styled.section`
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
  display: block;
  margin-bottom: 0.5em;

  ${MEDIA.tablet`
    display: none;
  `};
`;

const Image = animated(styled.div`
  ${position("absolute", "0", "0", null, "0")};
  height: 600%;
  background-image: url(${homeBackground});
  background-position: bottom;
  background-repeat: repeat
  pointer-events: none;
  animation: ${infiniteScroll} 45s linear infinite;
`);

export default function Home() {
  const [renderAnimations, setRenderAnimations] = useState(false);
  const { name, location } = CONTACT_DETAILS;
  const currentEmployer = EXPERIENCE[0];

  useEffect(() => {
    setRenderAnimations(true);

    return function cleanup() {
      setRenderAnimations(false);
    };
  }, []);

  return (
    <Layout>
      <TitleAndMetaTags />
      <Wrapper>
        <Transition
          native
          items={renderAnimations}
          config={config.molasses}
          enter={[{ opacity: 0.04, top: -1500 }]}
          leave={{ opacity: 0, top: -2000 }}
        >
          {renderAnimations =>
            renderAnimations && (props => <Image style={props} />)
          }
        </Transition>

        <Header>
          <Navigation />
          <Social />
        </Header>

        <Section>
          <H1>{name}</H1>
          <Text as="p">
            {currentEmployer.position} <span>@</span>{" "}
            <ExternalLink
              href={currentEmployer.url}
              alt={`${currentEmployer.company}'s website`}
              aria-label={`${currentEmployer.company}'s website`}
              withHighlight
            >
              {currentEmployer.company}
            </ExternalLink>
          </Text>
          <Text as="p">{location}</Text>
        </Section>

        <Footer>
          <FooterSocial />
          <Text as="p" small>
            background courtesy of{" "}
            <ExternalLink
              href="https://absurd.design/"
              alt="absurd.design"
              aria-label="absurd.design"
              withHighlight
            >
              absurd.design
            </ExternalLink>
          </Text>
          <Text as="p" small>
            &copy; 2020
          </Text>
        </Footer>
      </Wrapper>
    </Layout>
  );
}
