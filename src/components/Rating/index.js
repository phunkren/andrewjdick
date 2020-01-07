import React, { Fragment } from "react";
import { EXPERTISE } from "../../data";
import {
  FilledStarIcon,
  EmptyStarIcon,
  Skill,
  SkillRating,
  Label
} from "./styles";

export const Rating = ({ skills, numberOfStars }) => (
  <Fragment>
    {skills.map(({ id, rating }, index) => (
      <Skill key={`Skill-${index}`}>
        <Label>{id}</Label>
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

Rating.defaultProps = {
  skills: EXPERTISE,
  numberOfStars: 5
};
