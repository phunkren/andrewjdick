import React from 'react';
import styled from 'styled-components';
import { rgba, position } from 'polished';
import { Social } from '../components/Social';
import { MEDIA } from '../styles/media';
import { COLORS } from '../styles/colors';
import { Link } from './Link';

const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row;

  ${ListItem} + ${ListItem} {
    position: relative;
    margin-left: 2em;

    &::before {
      content: '|';
      position: absolute;
      left: -1em;
      color: ${rgba(COLORS.black, 0.25)};
      transform: translateX(-50%);
    }
  }
`;

const MobileList = styled.ul`
  display: flex;
  flex-flow: column;

  ${ListItem} + ${ListItem} {
    position: relative;
    margin-top: 2em;
  }
`;

const Nav = styled.nav`
  display: none;

  ${MEDIA.desktop`
    display: flex;
  `}
`;

const MobileNav = styled.nav`
  ${position('absolute', '80px', '0', '0', '0')};
  display: flex;
  flex-flow: column;
  padding: 2em 2em 1em;
  background-image: radial-gradient(
    70% 70% at 50% 100%,
    #e8e8e8 0%,
    #fafafa 100%
  );

  & > ${List} {
    flex: 1;
    display: flex;
    flex-flow: column;
  }

  ${MEDIA.desktop`
    display: none;
  `}
`;

const RawNavigation = props => (
  <Nav aria-label="Main" {...props}>
    <List>
      <ListItem>
        <Link to="/blog">Blog</Link>
      </ListItem>
      <ListItem>
        <Link to="/cv">Résumé</Link>
      </ListItem>
    </List>
  </Nav>
);

const RawMobileNavigation = props => (
  <MobileNav aria-label="Main" {...props}>
    <MobileList>
      <ListItem>
        <Link to="/blog">Blog</Link>
      </ListItem>
      <ListItem>
        <Link to="/cv">Résumé</Link>
      </ListItem>
    </MobileList>
    <Social css="margin: auto auto 0" aria-label="Social (navigation)" />
  </MobileNav>
);

export const Navigation = styled(RawNavigation)``;
export const MobileNavigation = styled(RawMobileNavigation)``;
