import React from "react";
import { StyledLink, List, ListItem } from "./styles";

export const NavigationLink = ({ children, ...props }) => (
  <ListItem>
    <StyledLink {...props}>{children}</StyledLink>
  </ListItem>
);

export const Navigation = props => (
  <List {...props}>
    <NavigationLink href="./resume">Résumé</NavigationLink>
  </List>
);
