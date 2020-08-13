import React from 'react';
import { Icon } from './Icon';

export const PrintIcon = props => (
  <Icon aria-labelledby="icon-print" {...props}>
    <title id="icon-print">Print</title>
    <polyline points="6 9 6 2 18 2 18 9"></polyline>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
    <rect x="6" y="14" width="12" height="8"></rect>
  </Icon>
);
