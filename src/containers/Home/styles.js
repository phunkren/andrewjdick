import styled from "styled-components";
import { media } from "media.js";

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 2em 0;

  ${media.tablet`
    justify-content: space-between;
  `};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 0 2em 2em;
`;

export const Name = styled.h1`
  font-size: 2rem;
  line-height: 2.2rem;
  margin-bottom: 10px;
  text-align: center;

  ${media.tablet`
    font-size: 4rem;
    line-height: 4.4rem;
  `};
`;

export const Info = styled.p`
  padding-bottom: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;

  ${media.tablet`
    font-size: 2rem;
    line-height: 2.5rem;
  `};
`;
