import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { animated } from 'react-spring/renderprops';
import Div100vh from 'react-div-100vh';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { Social } from './Social';
import { Navigation } from './Navigation';
import { IconButton } from './Button';
import { CrossIcon } from './icons/CrossIcon';
import { ThemeToggle } from './Theme';
import { DrawerSpring } from './Animation';
import { fadeInAnimation } from '../styles/animation';

const StyledDialogContent = styled(DialogContent)(({ theme }) => [
  css`
    &[data-reach-dialog-content] {
      margin: 0 auto 0 0;
      padding: 0;
      background-color: transparent;
      width: 75vw;
      height: 100vh;
      height: -webkit-fill-available;

      &:focus {
        outline: none;
      }
    }
  `,
]);

const StyledDialogOverlay = styled(DialogOverlay)(({ state }) => [
  css`
    &[data-reach-dialog-overlay] {
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.8);
      transition: background-color 0.5s ease-out;
      z-index: 50;
      ${fadeInAnimation};
    }
  `,
  state === 'close' &&
    css`
      &[data-reach-dialog-overlay] {
        background-color: rgba(0, 0, 0, 0);
      }
    `,
]);

const CloseButton = styled(IconButton)``;

const Content = styled(animated.div)(({ theme }) => [
  css`
    display: flex;
    flex-flow: column;
    margin: 0;
    margin-right: auto;
    padding: var(--spacing-medium) var(--spacing-medium) var(--spacing-large);
    background-color: ${theme.overlay10};
    border-right: 1px solid var(--color-gray400);
    color: ${theme.copyColor};
    position: relative;
    width: 75vw;
    height: 100%;
  `,
]);

const StyledNavigation = styled(Navigation)(
  ({ theme }) => css`
    color: ${theme.copyColor};
    margin-top: var(--spacing-huge);
    padding-left: var(--spacing-medium);
  `,
);

const Border = styled(animated.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: var(--color-orange-600);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  z-index: 5;
  opacity: 0.75;
`;

export const Drawer = ({ state, onDismiss, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  /* Delay the dialog unmounting to allow the close transition to finish */
  useEffect(() => {
    if (state === 'open') {
      setIsOpen(true);
    } else {
      setTimeout(() => setIsOpen(false), 250);
    }
  }, [state]);

  return (
    <StyledDialogOverlay state={state} isOpen={isOpen} onDismiss={onDismiss}>
      <StyledDialogContent aria-label="Mobile navigation menu" {...props}>
        <DrawerSpring native state={state}>
          {({ x, y }) => (
            <Div100vh>
              <Content
                style={{
                  transform: x.interpolate(x => `translate3d(${x}vw,0,0)`),
                }}
              >
                <div
                  css={`
                    height: 60px;
                    display: flex;
                    flex-direction: row-reverse;
                    justify-content: space-between;
                    align-items: center;
                    padding-right: var(--spacing-small);
                  `}
                >
                  <CloseButton
                    aria-label="Close navigation menu"
                    onClick={onDismiss}
                  >
                    <CrossIcon />
                  </CloseButton>

                  <ThemeToggle />
                </div>

                <StyledNavigation column onLinkClick={onDismiss} />

                <Social css="justify-content: space-around; margin-top: auto;" />

                <Border
                  style={{
                    transform: y.interpolate(y => `translate3d(0, ${y}%, 0)`),
                  }}
                />
              </Content>
            </Div100vh>
          )}
        </DrawerSpring>
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};
