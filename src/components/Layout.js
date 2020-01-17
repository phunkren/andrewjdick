import React, { Fragment } from "react";
import { Transition } from "react-spring/renderprops";
import { animated } from "react-spring";
import styled, { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import reset from "modern-css-reset";
import Roboto from "../assets/fonts/Roboto-Regular.woff2";
import Rubik from "../assets/fonts/Rubik-Regular.woff2";
import { BreadcrumbPortal } from "../components/Breadcrumb";
import { COLORS } from "../styles/colors";
import { MEDIA } from "../styles/media";

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

const Main = styled(animated.main)`
  flex: 1;
  display: flex;
  flex-flow: column;
`;

const RawLayout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Transition
        items={true}
        delay={300}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show &&
          (props => (
            <Main style={props}>
              <BreadcrumbPortal />
              {children}
            </Main>
          ))
        }
      </Transition>
    </Fragment>
  );
};

export const Layout = styled(RawLayout)``;
