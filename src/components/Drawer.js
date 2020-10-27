import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import Div100vh from 'react-div-100vh';
import styled, { css } from 'styled-components';
import '@reach/dialog/styles.css';
import { Social } from './Social';
import { Navigation } from './Navigation';
import { IconButton } from './Button';
import { CrossIcon } from './icons/CrossIcon';
import { ThemeToggle } from './Theme';

const Content = styled(DialogContent)(
  ({ theme }) => css`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin: 0;
    width: 75vw;
    margin-left: auto;
    padding: 100px var(--spacing-massive) var(--spacing-huge);
    background-color: ${theme.background};
    border-left: 1px solid ${theme.highlightColor};
    color: ${theme.copyColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      border-radius: 4px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      background: ${theme.overlay10};
    }

    & > * {
      z-index: 1;
    }
  `,
);

const Overlay = styled(DialogOverlay)`
  &[data-reach-dialog-overlay] {
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 50;
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 28px;
  right: var(--spacing-medium);
  z-index: 100;
`;

const StyledThemeToggle = styled(ThemeToggle)`
  &[data-reach-custom-checkbox-container] {
    position: absolute;
    top: 28px;
    left: 36px;
    z-index: 100;
  }
`;

export const Drawer = ({
  'aria-label': ariaLabel,
  isOpen,
  onDismiss,
  props,
}) => {
  return (
    <Overlay isOpen={isOpen}>
      <Content as={Div100vh} aria-label={ariaLabel} {...props}>
        <CloseButton aria-label="Close navigation menu" onClick={onDismiss}>
          <CrossIcon width="1.5rem" height="1.5rem" />
        </CloseButton>
        <StyledThemeToggle />
        <Navigation column />
        <Social css="justify-content: space-around;" />
      </Content>
    </Overlay>
  );
};
