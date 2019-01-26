import styled from "styled-components";
import { rgba } from "polished";
import { COLORS, ALPHAS } from "constants.js";

export const RawLink = styled.a`
  color: ${COLORS.black};
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: ${rgba(COLORS.black, ALPHAS.rollover)};
  }

  &:active {
    color: ${rgba(COLORS.black, ALPHAS.active)};
  }

  &:disabled {
    color: ${rgba(COLORS.black, ALPHAS.disabled)};
  }
`;
