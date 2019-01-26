import React from "react";
import { StyledLink, List, ListItem } from "./styles";

export const NavigationLink = ({ children, ...props }) => (
  <StyledLink {...props}>
    <ListItem>{children}</ListItem>
  </StyledLink>
);

export const Navigation = () => (
  <List>
    <NavigationLink href="./résumé">Résumé</NavigationLink>
  </List>
);
