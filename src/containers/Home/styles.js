import styled, { keyframes } from "styled-components";
import { Navigation } from "./Navigation";
import homeBackground from "assets/images/homeBackground.png";
import Particles from "react-particles-js";
import { media } from "media.js";

const infiniteScroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -1920px, 0);
  }
`;

const particleOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.1;
  }
`;

export const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: ${particleOpacity} 2s linear;
  pointer-events: none;
  opacity: 0.1;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  height: 400%;
  background-image: url(${homeBackground});
  background-position: center center;
  background-repeat: repeat
  pointer-events: none;
  animation: ${infiniteScroll} 120s linear infinite;
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 400ms linear;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 2em 0;
  position: relative;
  transition: top 600ms linear;
  ${media.tablet`
    justify-content: space-between;
  `};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 0 2em 2em;
  position: relative;
  transition: bottom 600ms linear;

  ${media.tablet`
    display: none;
  `};
`;

export const FooterNavigation = styled(Navigation)`
  display: block;
`;

export const Name = styled.h1`
  font-size: 2rem;
  line-height: 2.25rem;
  margin-bottom: 10px;
  text-align: center;

  ${media.tablet`
    font-size: 3.5rem;
    line-height: 3.75rem;
  `};

  ${media.desktop`
    font-size: 4.5rem;
    line-height: 4.75rem;
  `};
`;

export const Info = styled.p`
  padding-bottom: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;

  ${media.tablet`
    font-size: 1.8rem;
    line-height: 2.5rem;
  `};
`;
