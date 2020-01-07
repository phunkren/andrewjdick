import { createGlobalStyle } from "styled-components";
import { media } from "../../media";

export const GlobalStyles = createGlobalStyle`

  html {
    min-height: 100%;
    display: flex;
  }
  
  body, 
  div#___gatsby, 
  div#gatsby-focus-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
		font-weight: 400;
		line-height: 1.2rem;
    background-color: whitesmoke;

    ${media.tablet`
      font-size: 1.2rem;
		  font-weight: 400;
		  line-height: 1.6rem;
    `}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', serif;
    margin-bottom: 1em;
  }

  p {
     padding-bottom: 1em;
  }
`;
