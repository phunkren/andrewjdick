import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Logo } from '../components/Logo';
import { Navigation, MobileNavigation } from '../components/Navigation';
import { IconButton } from '../components/Button';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { CrossIcon } from './icons/CrossIcon';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { convertPxToRem } from '../utils/unitConversion';

const Outer = styled.header(({ isNavOpen }) => [
  css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;

    ${MEDIA.print`
      display: none;
    `};
  `,
  isNavOpen &&
    css`
      background-color: var(--color-white);
    `,
]);

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 var(--spacing-medium);
  max-width: ${convertPxToRem(BREAKPOINTS.desktopUltraWide)};
  height: 100px;

  ${MEDIA.tablet`
      padding: 0 var(--spacing-huge);
    `};
`;

const MobileNavigationButton = styled(IconButton)`
  ${MEDIA.tablet`
    display: none;  
  `}
`;

const LogoLink = styled(Link)(({ theme }) => [
  css`
    border: 2px solid;
    border-color: var(--color-black);
    background-color: var(--color-white);
    border-radius: 50%;
    overflow: hidden;

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
      <Outer isNavOpen={isNavOpen}>
        <Inner>
          <LogoLink to="/" aria-label="Return to homepage">
            <Logo />
          </LogoLink>

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
        </Inner>
      </Outer>

      {isNavOpen && <MobileNavigation />}
    </>
  );
};
