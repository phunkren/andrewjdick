import React from 'react';
import 'modern-css-reset';
import 'prismjs/themes/prism-tomorrow.css';
import './src/styles/global.css';
import { Theme } from './src/components/Theme';
import { Layout } from './src/components/Layout';

export const wrapRootElement = ({ element }) => <Theme>{element}</Theme>;
export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
