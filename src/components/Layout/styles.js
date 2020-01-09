import reset from "modern-css-reset";
import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import Roboto from "../../assets/fonts/Roboto-Regular.woff2";
import Rubik from "../../assets/fonts/Rubik-Regular.woff2";
import { COLORS } from "../../styles/colors";
import { MEDIA } from "../../styles/media";

export const GlobalStyles = createGlobalStyle`
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

    ${MEDIA.desktopWide`
      font-size: 1.5rem;
    `}
  }
  
  body, 
  div#___gatsby, 
  div#gatsby-focus-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${COLORS.black};
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
  }
`;
