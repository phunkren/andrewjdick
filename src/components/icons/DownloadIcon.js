import React from 'react';
import { useId } from '@reach/auto-id';
import { Icon } from './Icon';

export const DownloadIcon = props => {
  const id = `icon-download-${useId()}`;

  return (
    <Icon aria-labelledby={id} {...props}>
      <title id={id}>Download</title>
      <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
    </Icon>
  );
};
