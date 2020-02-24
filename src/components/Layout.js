import React, { Fragment, useState } from 'react';
import { Transition } from 'react-spring/renderprops';
import { animated } from 'react-spring';
import styled, { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import { reset } from 'modern-css-reset';
import { Logo } from '../components/Logo';
import { IconButton } from '../components/Button';
import { CrossIcon } from './icons/CrossIcon';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { Navigation, MobileNavigation } from '../components/Navigation';
import Roboto from '../assets/fonts/Roboto-Regular.woff2';
import Rubik from '../assets/fonts/Rubik-Regular.woff2';
import { MEDIA } from '../styles/media';
import { COLORS } from '../styles/colors';
import { Link } from 'gatsby';

const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    src: url(${Rubik}) format('woff2');
    font-family: 'Rubik';
    font-display: swap;
  }

  @font-face {
    src: url(${Roboto}) format('woff2');
    font-family: 'Roboto';
    font-display: swap;
  }

  html {
    display: flex;
  }

  body {
    font-family: 'Roboto', serif;
    font-size: 16px;
    font-size: 1rem;
    color: ${rgba(COLORS.black, 0.9)};
    width: 100%;
    background-image: radial-gradient(
      70% 70% at 50% 100%,
      #e8e8e8 0%,
      #fafafa 100%
    );
  

    *::selection {
      background: ${rgba(COLORS.wedgewood, 0.25)};
    }

    *::moz-selection {
      background: ${rgba(COLORS.wedgewood, 0.25)};
    }

    ${MEDIA.desktopWide`
      font-size: 1.25rem;
    `}
  }
  
  body, 
  div#___gatsby, 
  div#gatsby-focus-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4 {
    color: ${COLORS.black};
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  height: 80px;
  z-index: 100;

  ${MEDIA.print`
    display: none;
  `}
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
`;

const Wrapper = styled(animated.div)`
  flex: 1;
  height: 100%;
`;

const MobileNavigationButton = styled(IconButton)`
  ${MEDIA.desktop`
    display: none;  
  `}
`;

const RawLayout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleMobileNavigation() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Header>
          <Link to="/">
            <Logo />
          </Link>

          <Navigation />

          <MobileNavigationButton
            aria-label="Navigation menu"
            onClick={toggleMobileNavigation}
          >
            {isNavOpen ? (
              <CrossIcon width="1.5em" height="1.5em" />
            ) : (
              <HamburgerIcon width="1.5em" height="1.5em" />
            )}
          </MobileNavigationButton>
        </Header>

        <Transition
          items={true}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show && (props => <Wrapper style={props}>{children}</Wrapper>)
          }
        </Transition>

        {isNavOpen && <MobileNavigation />}
      </Container>
    </Fragment>
  );
};

export const Layout = styled(RawLayout)``;
