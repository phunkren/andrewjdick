import styled, { css } from 'styled-components';
import { MEDIA } from '../styles/media';
import { convertPxToRem } from '../utils/unitConversion';

export const SIZES = {
  'xxs': css`
    font-size: 10px;
    font-size: ${convertPxToRem(10)};
    line-height: 1.8;
    letter-spacing: 2px;
    text-transform: uppercase;
  `,
  'xs': css`
    font-size: 12px;
    font-size: ${convertPxToRem(12)};
    line-height: 1.667;
    letter-spacing: 2px;
    text-transform: uppercase;

    ${MEDIA.print`
      font-size: 10px;
      font-size: ${convertPxToRem(10)};
      line-height: normal;
    `};
  `,
  'ps': css`
    font-size: 16px;
    font-size: ${convertPxToRem(16)};
    line-height: 1.5;
  `,
  'pb': css`
    font-size: 18px;
    font-size: ${convertPxToRem(18)};
    line-height: 1.7;
  `,
  'm': css`
    font-size: 18px;
    font-size: ${convertPxToRem(18)};
    line-height: 1.444;

    ${MEDIA.desktop`
      font-size: 20px;
      font-size: ${convertPxToRem(20)};
      line-height: 1.4;
    `}
  `,
  'l': css`
    font-size: 20px;
    font-size: ${convertPxToRem(20)};
    line-height: 1.4;

    ${MEDIA.desktop`
      font-size: 22px;
      font-size: ${convertPxToRem(22)};
      line-height: 1.364;
    `};
  `,
  'xl': css`
    font-size: 24px;
    font-size: ${convertPxToRem(24)};
    line-height: 1.334;

    ${MEDIA.desktop`
      font-size: 28px;
      font-size: ${convertPxToRem(28)};
      line-height: 1.286;
    `};
  `,
  'xxl': css`
    font-size: 28px;
    font-size: ${convertPxToRem(28)};
    line-height: 1.214;

    ${MEDIA.desktop`
      font-size: 34px;
      font-size: ${convertPxToRem(34)};
      line-height: 1.235;
    `};
  `,
  'xxxl': css`
    font-size: 32px;
    font-size: ${convertPxToRem(32)};
    line-height: 1.25;

    ${MEDIA.desktop`
      font-size: 40px;
      font-size: ${convertPxToRem(40)};
      line-height: 1.2;
    `};
  `,
  '4xl': css`
    font-size: 38px;
    font-size: ${convertPxToRem(38)};
    line-height: 1.211;

    ${MEDIA.desktop`
      font-size: 44px;
      font-size: ${convertPxToRem(44)};
      line-height: 1.182;
    `};
  `,
  '5xl': css`
    font-size: 40px;
    font-size: ${convertPxToRem(40)};
    line-height: 1.2;

    ${MEDIA.desktop`
      font-size: 48px;
      font-size: ${convertPxToRem(48)};
      line-height: 1.167;
    `};
  `,
};

export const Text = styled.span(({ size }) => SIZES[size]);
