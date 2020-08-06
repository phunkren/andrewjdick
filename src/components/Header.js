import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Logo } from '../components/Logo';
import { Navigation, MobileNavigation } from '../components/Navigation';
import { IconButton } from '../components/Button';
import { MEDIA } from '../styles/media';
import { CrossIcon } from './icons/CrossIcon';
import { HamburgerIcon } from './icons/HamburgerIcon';

const Container = styled.header(({ isNavOpen }) => [
  css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 80px;

    ${MEDIA.tablet`
      height: 100px;
      padding: 0 2em;
    `};

    ${MEDIA.print`
      display: none;
    `};
  `,
  isNavOpen &&
    css`
      background-color: var(--color-white);
    `,
]);

const MobileNavigationButton = styled(IconButton)`
  ${MEDIA.tablet`
    display: none;  
  `}
`;

const StyledLink = styled(Link)(({ theme }) => [
  css`
    border: 2px solid;
    border-color: var(--color-black);
    background-color: var(--color-white);
    border-radius: 50%;

    &:hover {
      border-color: var(--color-blue-400);
    }

    &:active {
      border-color: var(--color-orange-400);
    }
  `,
]);

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleMobileNavigation() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      <Container isNavOpen={isNavOpen}>
        <StyledLink to="/" aria-label="Return to homepage">
          <Logo alt="Website logo" />
        </StyledLink>

        <Navigation />

        <MobileNavigationButton
          aria-label="Navigation menu"
          onClick={toggleMobileNavigation}
        >
          {isNavOpen ? (
            <CrossIcon width="1.5em" height="1.5em" />
          ) : (
            <HamburgerIcon width="1.5em" height="1.5em" />
          )}
        </MobileNavigationButton>
      </Container>

      {isNavOpen && <MobileNavigation />}
    </>
  );
};
