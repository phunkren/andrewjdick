import React from "react";
import { Transition, config } from "react-spring/renderprops";
import styled, { keyframes } from "styled-components";
import { animated } from "react-spring/renderprops";
import { Layout } from "../components/Layout";
import { Social } from "../components/Social";
import homeBackground from "../assets/images/homeBackground.png";
import { media } from "../media.js";
import { ExternalLink } from "../components/Link";
import { TitleAndMetaTags } from "../components/TitleAndMetaTags";
import { Navigation } from "../components/Navigation";
import { CONTACT_DETAILS } from "../constants.js";
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
`;

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const BackgroundCredit = styled.figcaption`
  display: block;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.7);
  ${media.tablet`
    display: block;
  `};
`;

const Name = styled.h1`
  font-size: 2rem;
  line-height: 2.25rem;
  margin-bottom: 10px;
  text-align: center;
  text

  ${media.tablet`
    font-size: 3.5rem;
    line-height: 3.75rem;
  `};

  ${media.desktop`
    font-size: 4.5rem;
    line-height: 4.75rem;
  `};
`;

const Info = styled.p`
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  transition: opacity 100ms ease-out;

  ${media.tablet`
    font-size: 1.8rem;
    line-height: 2.5rem;
  `};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  position: relative;
  height: 100px;

  ${media.tablet`
    justify-content: space-between;
  `};
`;

const RawImage = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  height: 600%;
  background-image: url(${homeBackground});
  background-position: bottom;
  background-repeat: repeat
  pointer-events: none;
  animation: ${infiniteScroll} 45s linear infinite;
`;

const Image = animated(RawImage);

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2em 1em;
  position: relative;
`;

const FooterSocial = styled(Social)`
  display: inline-block;
  margin-bottom: 24px;

  ${media.tablet`
    display: none;
  `};
`;

const At = styled.span`
  display: inline-block;
`;

const Legal = styled.p`
  font-size: 0.75rem;
  padding: 0;
`;

export default class Home extends React.Component {
  state = { renderAnimations: false };

  componentDidMount() {
    this.setState({ renderAnimations: true });
  }

  componentWillUnmount() {
    this.setState({ renderAnimations: false });
  }

  render() {
    const { renderAnimations } = this.state;
    const { name, location } = CONTACT_DETAILS;
    const currentEmployer = EXPERIENCE[0];

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
            <Name>{name}</Name>
            <Info>
              {currentEmployer.position} <At>@</At>{" "}
              <ExternalLink
                href={currentEmployer.url}
                alt={`${currentEmployer.company}'s website`}
                aria-label={`${currentEmployer.company}'s website`}
                withHighlight
              >
                {currentEmployer.company}
              </ExternalLink>
            </Info>
            <Info>{location}</Info>
          </Section>

          <Footer>
            <FooterSocial />
            <BackgroundCredit>
              background courtesy of{" "}
              <ExternalLink
                href="https://absurd.design/"
                alt="absurd.design"
                aria-label="absurd.design"
                withHighlight
              >
                absurd.design
              </ExternalLink>
            </BackgroundCredit>
            <Legal>&copy; 2020</Legal>
          </Footer>
        </Wrapper>
      </Layout>
    );
  }
}
