import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { COLORS } from "../styles/colors";
import { Link } from "./Link";

const List = styled.ul``;

const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;

  ${Link} {
    padding: 0.5em;
  }

  &:not(:first-child) {
    margin-left: 1em;
  }

  & + &::before {
    content: "|";
    margin-right: 1em;
    color: ${rgba(COLORS.black, 0.5)};
  }
`;

const RawNavigation = props => (
  <nav {...props}>
    <List>
      <ListItem>
        <Link to="/blog">Blog</Link>
      </ListItem>
      <ListItem>
        <Link to="/cv">Résumé</Link>
      </ListItem>
    </List>
  </nav>
);

export const Navigation = styled(RawNavigation)``;
