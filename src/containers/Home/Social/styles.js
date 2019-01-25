import styled from "styled-components";
import { lighten, darken } from "polished";

export const SocialLinks = styled.div``;

export const SocialLink = styled.a`
  display: inline-block;
  fill: ${darken(0.25, "#1d1c1c")};
  transition: fill 0.5s;

  &:not(:first-child) {
    margin-left: 0.75em;
  }

  &:active {
    svg {
      transform: scale(0.9);
      transition: transform 0.2s;
    }
  }

  &:hover {
    fill: ${lighten(0.1, "#1d1c1c")};
  }
`;
