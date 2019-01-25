import React, { Fragment } from "react";
import { StarIcon } from "components/icons";
import { StyledStarIcon, Skill, SkillRating, Label} from "./styles";
import { EXPERTISE } from "../data";

export const Rating = ({ skills, numberOfStars }) => (
  <Fragment>
    {skills.map(({ id, rating }) => (
      <Skill>
        <Label>{id}</Label>
        <SkillRating>
          {Array.from(new Array(numberOfStars)).map((star, index) => (
            <StyledStarIcon 
              key={index}
              width="1.5em"
              height="1.5em" 
              isFilled={Boolean(rating > index)} />
          ))}
        </SkillRating>
      </Skill>
    ))}
  </Fragment>
);

Rating.defaultProps = {
  skills: EXPERTISE,
  numberOfStars: 5
};
