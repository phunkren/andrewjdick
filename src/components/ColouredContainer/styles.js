import styled from "styled-components";
import { rgba } from "polished";
import { isBrowser } from "react-device-detect";
import { COLORS } from "constants.js";

export const Container = styled.main.attrs(
  ({ clientX, clientY, clientWidth, clientHeight, style }) =>
    isBrowser
      ? {
          style: {
            ...style,
            backgroundColor: rgba(
              Math.round((clientX / clientHeight) * 255),
              255 - Math.round((clientY / clientWidth) * 255),
              255 - Math.round((clientX / clientHeight) * 255),
              0.75
            )
          }
        }
      : {
          style: {
            ...style,
            backgroundColor: rgba(COLORS.white, 0.005)
          }
        }
)`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;

  transition: background-color 0.2s ease-out;
`;
