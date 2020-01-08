import React from "react";
import { Link } from "../Link";
import { List, ListItem } from "./styles";

export const NavigationLink = ({ children, ...props }) => (
  <ListItem>
    <Link {...props}>{children}</Link>
  </ListItem>
);

export const Navigation = props => (
  <List {...props}>
    <NavigationLink href="./cv" withHighlight>
      Résumé
    </NavigationLink>
  </List>
);
