import React from "react";
import { Link, List, ListItem } from "./styles";

export const NavigationLink = ({ children, ...props }) => (
  <Link {...props}>
    <ListItem>{children}</ListItem>
  </Link>
);

export const Navigation = () => (
  <List>
    <NavigationLink href="./resume">Resume</NavigationLink>
  </List>
);
