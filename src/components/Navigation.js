import React from 'react';
import styled, { css } from 'styled-components';
import { position } from 'polished';
import { Social } from '../components/Social';
import { MEDIA } from '../styles/media';
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
      color: var(--color-black);
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

const linkProps = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { classwerk: 'goat' } : { classwerk: 'potato' };

const StyledLink = styled(Link)(props => {
  console.log(props);

  return [
    props.className === 'goat' &&
      css`
        color: blue;
      `,
  ];
});

const RawNavigation = props => (
  <Nav aria-label="Main" {...props}>
    <List>
      <ListItem>
        <StyledLink partiallyActive to="/blog">
          Blog
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink getProps={linkProps} to="/cv">
          Résumé
        </StyledLink>
      </ListItem>
    </List>
  </Nav>
);

const RawMobileNavigation = props => (
  <MobileNav aria-label="Main" {...props}>
    <MobileList>
      <ListItem>
        <StyledLink getProps={linkProps} to="/blog">
          Blog
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink getProps={linkProps} to="/cv">
          Résumé
        </StyledLink>
      </ListItem>
    </MobileList>
    <Social css="margin: auto auto 0" aria-label="Social (navigation)" />
  </MobileNav>
);

export const Navigation = styled(RawNavigation)``;
export const MobileNavigation = styled(RawMobileNavigation)``;
