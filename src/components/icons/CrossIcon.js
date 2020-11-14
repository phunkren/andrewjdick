import React from 'react';
import { useId } from '@reach/auto-id';
import { Icon } from './Icon';

export const CrossIcon = props => {
  const id = `icon-cross-${useId()}`;

  return (
    <Icon aria-labelledby={id} {...props}>
      <title id={id}>Cross</title>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </Icon>
  );
};
