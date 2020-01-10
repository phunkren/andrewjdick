import React from "react";
import { Link } from "../Link";
import { List, ListItem } from "./styles";

export const Navigation = props => (
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
