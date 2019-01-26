import styled from "styled-components";
import { rgba } from "polished";
import { COLORS, ALPHAS } from "constants.js";

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${COLORS.white};
`;

export const Header = styled.header`
  padding: 3em;
`;
export const Content = styled.div`
  flex: 1;
  flex-direction: row;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 1em;
  border-top: 5px solid ${COLORS.black};
  border-bottom: 5px solid ${COLORS.black};
`;

export const Sidebar = styled.aside`
  flex: 0 1 25%;
  border-right: 2px solid ${COLORS.black};
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
  border-bottom: 1px solid ${COLORS.black};
`;

export const H3 = styled.h3`
  margin-bottom: 0.5em;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: uppercase;
`;

export const Description = styled.div`
  ul {
    padding: 0 0 1em 2em;
    list-style-type: circle;
  }
`;

export const Text = styled.p``;

export const Subtitle = styled(Text)`
  padding-bottom: 0.5em;
  font-weight: bold;
`;

export const Tag = styled.div`
  border: 1px solid ${COLORS.black};
  border-radius: 5px;
  background-color: ${rgba(COLORS.black, ALPHAS.disabled)};
  text-transform: uppercase;
  padding: 0.5em;
  margin-bottom: 0.5em;
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;

  &:not(:last-child) {
    margin-right: 1em;
  }
`;
