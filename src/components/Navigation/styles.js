import styled from "styled-components";
import { rgba } from "polished";
import { COLORS } from "../../styles/colors";

export const List = styled.ul``;

export const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;

  &:not(:first-child) {
    margin-left: 1em;
  }

  & + &::before {
    content: "|";
    margin-right: 1em;
    color: ${rgba(COLORS.black, 0.5)};
  }
`;
