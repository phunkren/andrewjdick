import styled from "styled-components";
import {StarIcon} from "components/icons";
import {rgba} from "polished";

export const Skill = styled.div`
  stroke: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1em;
`;

export const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

export const SkillRating = styled.div`

`

export const StyledStarIcon = styled(StarIcon)`
  fill: ${props => props.isFilled ? 'black' : `${rgba(0, 0, 0, 0.2)}`};
  
  &:not(:last-child) {
    margin-right: 1em;
  }
`