import styled, { css } from "styled-components";
import { isBrowser } from "react-device-detect";
import { rgba } from "polished";
import { COLORS, ALPHAS } from "constants.js";
import { media } from "media.js";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5em;
  text-align: center;

  ${isBrowser
    ? css`
        justify-content: space-between;
        text-align: left;
      `
    : undefined}

  ${media.print`
    padding: 2.5em 1em;
    text-align: left;
  `};
`;

export const HeaderTitle = styled.div``;

export const HeaderIcons = styled.div`
  ${media.print`
    display: none;
  `};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 1.5em;
  border-top: 5px solid ${COLORS.black};
  border-bottom: 5px solid ${COLORS.black};

  p,
  li {
    padding: 0;
    line-height: 1.75rem;
    color: #333;
  }

  ${media.tablet`
    display: inline-flex;
    flex-direction: row;
    padding: 1em;
  `};

  ${media.print`
    display: inline-flex;
    flex-direction: row;
    padding: 1em 0 0;
  `};
`;

export const Sidebar = styled.aside`
  ${media.tablet`
    flex: 0 1 25%;
    margin-right: 1em;
    border-right: 2px solid ${COLORS.black};
    padding: 2em 4em 2em 1em;
  `};

  ${media.print`
    flex: 0 1 25%;
    margin-right: 1em;
    border-right: 2px solid ${COLORS.black};
    padding: 1em 2em 2em 1em;
  `};
`;

export const Section = styled.article`
  padding: 0;

  ${media.tablet`
    flex: 1;
    padding: 2em 3em;
  `};

  ${media.print`
    flex: 1;
    padding: 1em;
  `};
`;

export const Block = styled.div`
  margin-bottom: 2em;

  ${media.print`
    margin-bottom: 1.5em;
  `};
`;

export const H1 = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 2.5rem;
  margin-bottom: 0;

  ${media.tablet`
    font-size: 3rem;
    line-height: 4rem;
  `};

  ${media.print`
    font-size: 3rem;
    line-height: 4rem;
  `};
`;

export const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.5rem;
  border-bottom: 1px solid ${COLORS.black};
`;

export const MobileH2 = styled(H2)`
  ${media.tablet`
    display: none;
  `};

  ${media.print`
    display: none;
  `};
`;

export const H3 = styled.h3`
  margin-bottom: 0.5em;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: uppercase;
`;

export const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.6rem;

  p {
    margin-top: 1.1em;
    padding-bottom: 0;
  }

  ${media.tablet`
    font-size: 1.2rem;
    line-height: 1.8rem;
  `};

  ul {
    padding: 0 0 0 2em;
    margin-top: 1em;
    list-style-type: circle;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6rem;

  ${media.tablet`
    font-size: 1.2rem;
    line-height: 1.8rem;
  `};
`;

export const Subtitle = styled.p`
  padding-bottom: 0.5em;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.3rem;
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

  ${media.print`
    font-size: 0.8rem;
  `};
`;

export const Dates = styled.span`
  display: block;
  margin-top: 0.5em;

  ${media.tablet`
    display: inline-block;
    margin-top: 0;

    &:before {
      content: ' / '
    }
  `};

  ${media.print`
    display: inline-block;
    margin-top: 0;

    &:before {
      content: ' / '
    }
  `};
`;
