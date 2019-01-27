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
              Math.round((clientX / clientWidth) * 255),
              Math.round(
                ((clientX + clientY / 2) / (clientHeight + clientWidth / 2)) *
                  255
              ),
              Math.round((clientY / clientHeight) * 255),
              0.1
            )
          }
        }
      : {
          style: {
            ...style,
            backgroundColor: rgba(COLORS.white, 0.1)
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
