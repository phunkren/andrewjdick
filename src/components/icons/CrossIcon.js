import React from 'react';
import { Icon } from './Icon';

export const CrossIcon = props => (
  <Icon aria-labelledby="icon-cross" {...props}>
    <title id="icon-cross">Cross</title>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </Icon>
);
