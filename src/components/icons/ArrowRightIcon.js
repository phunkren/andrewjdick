import React from 'react';
import { useId } from '@reach/auto-id';
import { Icon } from './Icon';

export const ArrowRightIcon = props => {
  const id = `icon-arrowRight-${useId()}`;

  return (
    <Icon aria-labelledby={id} {...props}>
      <title id={id}>Arrow (right)</title>
      <path d="M5 12h13m-6-7l7 7-7 7" />
    </Icon>
  );
};
