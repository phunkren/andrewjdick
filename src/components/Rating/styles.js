import styled from "styled-components";
import { rgba } from "polished";
import { StarIcon } from "../icons";
import { ALPHAS } from "../../styles/alphas";
import { COLORS } from "../../styles/colors";
import { MEDIA } from "../../styles/media";

export const Skill = styled.div`
  stroke: ${COLORS.black};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MEDIA.print`
    margin-right: 0.25em;
  `};
`;

export const SkillRating = styled.div``;

export const EmptyStarIcon = styled(StarIcon)`
  fill: ${rgba(COLORS.black, ALPHAS.disabled)};

  &:not(:last-child) {
    margin-right: 0.5em;

    ${MEDIA.print`
      margin-right: 0.15em;
    `};
  }
`;

export const FilledStarIcon = styled(EmptyStarIcon)`
  fill: ${COLORS.black};
`;
