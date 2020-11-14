import React from 'react';
import { useId } from '@reach/auto-id';
import { Icon } from './Icon';

export const HomeIcon = props => {
  const id = `icon-home-${useId()}`;

  return (
    <Icon aria-labelledby={id} {...props}>
      <title id={id}>Home</title>
      <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
      <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
    </Icon>
  );
};
