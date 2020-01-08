import styled from "styled-components";

export const List = styled.ul``;

export const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;

  &:not(:first-child) {
    margin-left: 1em;
  }
`;
