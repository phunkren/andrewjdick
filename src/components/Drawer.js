import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styled from 'styled-components';
import '@reach/dialog/styles.css';
import { Social } from './Social';
import { Navigation } from './Navigation';
import { IconButton } from './Button';
import { CrossIcon } from './icons/CrossIcon';
import { Theme } from './Theme';

const Content = styled(DialogContent)`
  &[data-reach-dialog-content] {
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin: 0;
    width: 75vw;
    margin-left: auto;
    padding: 100px var(--spacing-massive) var(--spacing-huge);
  }
`;

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

export const Drawer = ({ isOpen, onDismiss, props }) => {
  return (
    <Theme>
      <Overlay isOpen={isOpen} onDismiss={onDismiss} {...props}>
        <Content>
          <CloseButton aria-label="Navigation menu" onClick={onDismiss}>
            <CrossIcon width="1.5rem" height="1.5rem" />
          </CloseButton>
          <Navigation column />
          <Social css="justify-content: space-around;" />
        </Content>
      </Overlay>
    </Theme>
  );
};
