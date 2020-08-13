import styled from 'styled-components';
import lightbulbs from '../assets/images/lightbulbs.png';

export const Hero = styled.div`
  height: 200px;
  background-color: var(--color-gray-600);
  background-image: url(${lightbulbs});
  background-position: center center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  overflow: hidden;

  & > *:first-child {
    margin: 0;
    height: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-black);
    opacity: 0.85;
  }
`;
