import styled from "styled-components";
import { rgba } from "polished";

export const Container = styled.div.attrs(
  ({ clientX, clientY, clientWidth, clientHeight, style }) => ({
    style: {
      backgroundColor: rgba(
        Math.round((clientX / clientHeight) * 255),
        255 - Math.round((clientY / clientWidth) * 255),
        255 - Math.round((clientX / clientHeight) * 255),
        0.75
      )
    }
  })
)`
  transition: background-color 0.2s linear;
`;
