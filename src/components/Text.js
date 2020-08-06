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
  `,
  'ps': css`
    font-size: 14px;
    font-size: ${convertPxToRem(14)};
    line-height: 1.6;
  `,
  'pb': css`
    font-size: 16px;
    font-size: ${convertPxToRem(16)};
    line-height: 1.5;
  `,
  's': css`
    font-size: 16px;
    font-size: ${convertPxToRem(16)};
    line-height: 1.5;

    ${MEDIA.desktop`
      font-size: 18px;
      font-size: ${convertPxToRem(18)};
      line-height: 1.444;
    `}
  `,
  'm': css`
    font-family: 'Rubik', Arial, sans-serif;
    font-weight: 300;
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
    font-family: 'Rubik', Arial, sans-serif;
    font-weight: 300;
    font-size: 20px;
    font-size: ${convertPxToRem(20)};
    line-height: 1.4;

    ${MEDIA.desktop`
      font-size: 22px;
      font-size: ${convertPxToRem(22)};
      line-height: 1.364;
    `};

    ${MEDIA.desktopWide`
      font-size: 24px;
      font-size: ${convertPxToRem(24)};
      line-height: 1.334;
    `};
  `,
  'xl': css`
    font-family: 'Rubik', Arial, sans-serif;
    font-weight: 300;
    font-size: 24px;
    font-size: ${convertPxToRem(24)};
    line-height: 1.334;

    ${MEDIA.desktop`
      font-size: 28px;
      font-size: ${convertPxToRem(28)};
      line-height: 1.286;
    `};

    ${MEDIA.desktopWide`
      font-size: 32px;
      font-size: ${convertPxToRem(32)};
      line-height: 1.25;
    `};
  `,
  'xxl': css`
    font-family: 'Rubik', Arial, sans-serif;
    font-weight: 300;
    font-size: 28px;
    font-size: ${convertPxToRem(28)};
    line-height: 1.214;

    ${MEDIA.desktop`
      font-size: 34px;
      font-size: ${convertPxToRem(34)};
      line-height: 1.235;
    `};

    ${MEDIA.desktopWide`
      font-size: 40px;
      font-size: ${convertPxToRem(40)};
      line-height: 1.2;
    `};
  `,
  'xxxl': css`
    font-family: 'Rubik', Arial, sans-serif;
    font-weight: 300;
    font-size: 32px;
    font-size: ${convertPxToRem(32)};
    line-height: 1.25;

    ${MEDIA.desktop`
      font-size: 40px;
      font-size: ${convertPxToRem(40)};
      line-height: 1.2;
    `};

    ${MEDIA.desktopWide`
      font-size: 48px;
      font-size: ${convertPxToRem(48)};
      line-height: 1.167;
    `};
  `,
  '4xl': css`
    font-family: 'Rubik', Arial, sans-serif;
    font-weight: 300;
    font-size: 38px;
    font-size: ${convertPxToRem(38)};
    line-height: 1.211;

    ${MEDIA.desktop`
      font-size: 44px;
      font-size: ${convertPxToRem(44)};
      line-height: 1.182;
    `};

    ${MEDIA.desktopWide`
      font-size: 56px;
      font-size: ${convertPxToRem(56)};
      line-height: 1.423;
    `};
  `,
  '5xl': css`
    font-family: 'Rubik', Arial, sans-serif;
    font-weight: 300;
    font-size: 40px;
    font-size: ${convertPxToRem(40)};
    line-height: 1.2;

    ${MEDIA.desktop`
      font-size: 48px;
      font-size: ${convertPxToRem(48)};
      line-height: 1.167;
    `};

    ${MEDIA.desktopWide`
      font-size: 64px;
      font-size: ${convertPxToRem(64)};
      line-height: 1.125;
    `}
  `,
};

export const Text = styled.span(({ size }) => SIZES[size]);
