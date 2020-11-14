import React from 'react';
import { useId } from '@reach/auto-id';
import { Icon } from './Icon';

export const TickIcon = props => {
  const id = `icon-tick-${useId()}`;

  return (
    <Icon viewBox="0 0 24 24" aria-labelledby={id} {...props}>
      <title id={id}>Tick</title>
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </Icon>
  );
};
