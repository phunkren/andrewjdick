import React from 'react';
import { useId } from '@reach/auto-id';
import { Icon } from './Icon';

export const RssIcon = props => {
  const id = `icon-rss-${useId()}`;

  return (
    <Icon
      viewBox="0 0 24 24"
      aria-labelledby={id}
      color="currentColor"
      {...props}
    >
      <title id={id}>RSS Icon</title>
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </Icon>
  );
};
