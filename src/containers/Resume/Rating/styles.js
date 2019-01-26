import styled from "styled-components";
import { rgba } from "polished";
import { StarIcon } from "components/icons";
import { COLORS, ALPHAS } from "constants.js";

export const Skill = styled.div`
  stroke: ${COLORS.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.75em;
`;

export const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

export const SkillRating = styled.div``;

export const EmptyStarIcon = styled(StarIcon)`
  fill: ${rgba(COLORS.black, ALPHAS.disabled)};

  &:not(:last-child) {
    margin-right: 0.5em;
  }
`;

export const FilledStarIcon = styled(EmptyStarIcon)`
  fill: ${COLORS.black};
`;
