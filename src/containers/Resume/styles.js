import styled from "styled-components";
import {rgba} from "polished";

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 3em;
  border-bottom: 10px solid black;
`;
export const Content = styled.div`
  flex: 1;
  flex-direction: row;
  display: inline-flex;
  padding: 1em;
`;

export const Sidebar = styled.aside`
  flex: 0 1 25%;
  border-right: 2px solid black;
  padding: 1em 2em 2em 1em;
  margin-right: 1em;
`;

export const Section = styled.section`
  flex: 1;
  padding: 1em;
`;

export const Footer = styled.footer`
  background-color: black;
`;

export const Block = styled.div`
  margin-bottom: 1.5em;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  line-height: 4rem;
  margin-bottom: 0;
`;

export const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.5rem;
  border-bottom: 1px solid black;
`;

export const H3 = styled.h3`
  margin-bottom: 0.5em;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;

  ul {
    padding: 0 0 1em 2em;
    list-style-type: circle;
  }
`;

export const Subtitle = styled(Text)`
  padding-bottom: 0.5em;
  font-weight: bold;
`;

export const Tag = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${rgba('black', 0.1)};
  text-transform: uppercase;
  padding: 0.5em;
  margin-bottom: 0.5em;
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1em;
  }
`;
