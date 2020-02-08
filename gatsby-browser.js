import React from 'react';
import { BreadcrumbProvider } from './src/components/Breadcrumb';

require('prismjs/themes/prism-okaidia.css');

export const wrapRootElement = ({ element }) => (
  <BreadcrumbProvider>{element}</BreadcrumbProvider>
);
