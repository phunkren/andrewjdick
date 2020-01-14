import React, { Fragment } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { EXPERTISE } from "../data";
import { ALPHAS } from "../styles/alphas";
import { COLORS } from "../styles/colors";
import { MEDIA } from "../styles/media";
import { Text } from "../styles/typography";
import { StarIcon } from "./icons";

const Skill = styled.div`
  stroke: ${COLORS.black};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MEDIA.print`
    margin-right: 0.25em;
  `};
`;

const SkillRating = styled.div``;

const EmptyStarIcon = styled(StarIcon)`
  fill: ${rgba(COLORS.black, ALPHAS.disabled)};

  &:not(:last-child) {
    margin-right: 0.5em;

    ${MEDIA.print`
      margin-right: 0.15em;
    `};
  }
`;

const FilledStarIcon = styled(EmptyStarIcon)`
  fill: ${COLORS.black};
`;

const RawRating = ({ skills, numberOfStars }) => (
  <Fragment>
    {skills.map(({ id, rating }, index) => (
      <Skill key={`Skill-${index}`}>
        <Text>{id}</Text>
        <SkillRating>
          {Array.from(new Array(numberOfStars)).map((star, index) =>
            rating > index ? (
              <FilledStarIcon
                key={`Star-${index}`}
                width="1.4em"
                height="1.4em"
              />
            ) : (
              <EmptyStarIcon
                key={`Star-${index}`}
                width="1.4em"
                height="1.4em"
              />
            )
          )}
        </SkillRating>
      </Skill>
    ))}
  </Fragment>
);

RawRating.defaultProps = {
  skills: EXPERTISE,
  numberOfStars: 5
};

export const Rating = styled(RawRating)``;
