import React from 'react';
import { Theme } from './src/components/Theme';
import { Layout } from './src/components/Layout';

export const wrapRootElement = ({ element }) => <Theme>{element}</Theme>;
export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
