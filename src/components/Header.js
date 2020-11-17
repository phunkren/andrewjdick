import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { IconButton } from '../components/Button';
import { Link } from '../components/Link';
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

const Inner = styled.div(({ theme, variant }) => [
  css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: var(--spacing-medium) auto 0;
    padding: 0 var(--spacing-medium);
    color: var(--color-white);
    max-width: ${convertPxToRem(BREAKPOINTS.desktopUltraWide)};
    height: 60px;

    ${MEDIA.tablet`
      padding: 0 var(--spacing-huge);
    `};
  `,
  variant === 'home' &&
    css`
      color: ${theme.copyColor};
    `,
]);

const DesktopNavigation = styled(Navigation)`
  display: none;

  ${MEDIA.tablet`
    display: block;  
    margin-right: auto;
    margin-left: var(--spacing-massive);
  `}
`;

const DesktopThemeToggle = styled(ThemeToggle)`
  display: none;

  ${MEDIA.tablet`
    display: flex;
  `}
`;

const MobileNavigationButton = styled(IconButton)`
  color: inherit;

  ${MEDIA.tablet`
    display: none;  
  `}
`;

export const Header = ({ variant }) => {
  const [navStatus, setNavStatus] = useState('close');

  function toggleMobileNavigation() {
    setNavStatus(navStatus !== 'open' ? 'open' : 'close');
  }

  function handleDismiss() {
    toggleMobileNavigation();
    setNavStatus('close');
  }

  return (
    <>
      <Outer>
        <Inner variant={variant}>
          <Link to="/" aria-label="Return to homepage" css="display: flex;">
            <Logo
              css={`
                border: 2px solid;
                border-color: transparent;
                border-radius: 50%;
                overflow: hidden;
                transition: border 0.2s ease-out;

                ${isIOS &&
                  css`
                    mask-image: -webkit-radial-gradient(white, black);
                    -webkit-mask-image: -webkit-radial-gradient(white, black);
                  `}

                &:hover {
                  border-color: var(--color-blue-400);
                }

                &:active {
                  border-color: var(--color-orange-400);
                }
              `}
            />
          </Link>

          <DesktopNavigation />

          <DesktopThemeToggle />

          <MobileNavigationButton
            aria-label="Navigation menu"
            onClick={toggleMobileNavigation}
          >
            <HamburgerIcon />
          </MobileNavigationButton>
        </Inner>
      </Outer>

      <Drawer
        aria-label="Mobile navigation menu"
        state={navStatus}
        onDismiss={handleDismiss}
      />
    </>
  );
};
