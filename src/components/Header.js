import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { IconButton } from '../components/Button';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { convertPxToRem } from '../utils/unitConversion';
import { isIOS } from 'react-device-detect';
import { Drawer } from './Drawer';
import { ThemeToggle } from './Theme';

const Outer = styled.header(() => [
  css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 5;

    ${MEDIA.print`
      display: none;
    `};
  `,
]);

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--spacing-medium) auto 0;
  padding: 0 var(--spacing-medium);
  max-width: ${convertPxToRem(BREAKPOINTS.desktopUltraWide)};
  height: 60px;

  ${MEDIA.tablet`
    padding: 0 var(--spacing-huge);
  `};
`;

const DesktopNavigation = styled(Navigation)`
  display: none;

  ${MEDIA.tablet`
    display: block;  
    margin-left: auto;
    margin-right: var(--spacing-massive);
  `}
`;

const MobileNavigationButton = styled(IconButton)(
  ({ theme }) => css`
    color: ${theme.primary};

    ${MEDIA.tablet`
    display: none;  
  `}
  `,
);

const LogoLink = styled(Link)(({ theme }) => [
  css`
    border: 2px solid;
    border-color: var(--color-black);
    background-color: var(--color-white);
    border-radius: 50%;
    overflow: hidden;

    ${isIOS &&
      css`
        -webkit-mask-image: -webkit-radial-gradient(white, black);
      `}

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
      <Outer>
        <Inner>
          <LogoLink to="/" aria-label="Return to homepage">
            <Logo />
          </LogoLink>

          <DesktopNavigation />

          <ThemeToggle />

          <MobileNavigationButton
            aria-label="Navigation menu"
            onClick={toggleMobileNavigation}
          >
            <HamburgerIcon width="1.5rem" height="1.5rem" />
          </MobileNavigationButton>
        </Inner>
      </Outer>

      <Drawer isOpen={isNavOpen} onDismiss={toggleMobileNavigation} />
    </>
  );
};
