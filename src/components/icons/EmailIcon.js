import React from 'react';
import { Icon } from './Icon';

export const EmailIcon = props => (
  <Icon aria-labelledby="icon-email" {...props}>
    <title id="icon-email">Email</title>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </Icon>
);
