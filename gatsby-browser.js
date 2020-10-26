import React from 'react';
import 'modern-css-reset';
import 'prismjs/themes/prism-tomorrow.css';
import './src/styles/global.css';
import { Layout } from './src/components/Layout';

export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>;
// export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
