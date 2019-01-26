import styled from "styled-components";
import { Link } from "components/Link";

export const StyledLink = styled(Link)`
  text-decoration: underline;

  &:not(:first-child) {
    margin-left: 1em;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;
  font-size: 1.3em;
  color: currentColor;
`;
