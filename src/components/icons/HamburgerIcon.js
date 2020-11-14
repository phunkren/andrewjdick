import React from 'react';
import { useId } from '@reach/auto-id';
import { Icon } from './Icon';

export const HamburgerIcon = props => {
  const id = `icon-hamburger-${useId()}`;

  return (
    <Icon aria-labelledby={id} {...props}>
      <title id={id}>Mobile navigation menu</title>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </Icon>
  );
};
