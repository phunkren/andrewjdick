import React, { Fragment } from "react";
import { EXPERTISE } from "../../data";
import { Text } from "../../styles/typography";
import { FilledStarIcon, EmptyStarIcon, Skill, SkillRating } from "./styles";

export const Rating = ({ skills, numberOfStars }) => (
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

Rating.defaultProps = {
  skills: EXPERTISE,
  numberOfStars: 5
};
