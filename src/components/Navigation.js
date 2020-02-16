import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { COLORS } from '../styles/colors';
import { Link } from './Link';

const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;
  padding: 1em 1.5em;
`;

const List = styled.ul`
  ${ListItem} + ${ListItem} {
    position: relative;

    &::before {
      content: '|';
      position: absolute;
      left: 0;
      margin-right: 1em;
      color: ${rgba(COLORS.black, 0.5)};
    }
  }
`;

const RawNavigation = props => (
  <nav aria-label="Main" {...props}>
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
