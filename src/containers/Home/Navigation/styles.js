import styled from "styled-components";

export const Link = styled.a`
  &:not(:first-child) {
    margin-left: 1em;
    text-decoration: none;
  }

  color: black;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;
  font-size: 1.3em;
  color: currentColor;
`;
