import styled, { keyframes } from "styled-components";
import { animated } from "react-spring/renderprops";
import { Navigation } from "./Navigation";
import homeBackground from "assets/images/homeBackground.png";
import { media } from "media.js";

const infiniteScroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -1920px, 0);
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
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
  animation: ${infiniteScroll} 45s linear infinite 4s;
`;

export const Image = animated(RawImage);

const RawSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Section = animated(RawSection);

const RawHeader = styled.header`
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

export const Header = animated(RawHeader);

const RawFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  position: relative;
  height: 100px;
`;

export const Footer = animated(RawFooter);

export const BackgroundCredit = styled.figcaption`
  display: block;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.5);
  ${media.tablet`
    display: block;
  `};
`;

export const FooterNavigation = styled(Navigation)`
  display: block;
  margin-bottom: 20px;

  ${media.tablet`
    display: none;
  `};
`;

const RawAt = styled.span`
  display: inline-block;
`;

export const At = animated(RawAt);

const RawName = styled.h1`
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

export const Name = animated(RawName);

export const RawInfo = styled.p`
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

export const Info = animated(RawInfo);
