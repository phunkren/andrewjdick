import styled from "styled-components";
import { rgba } from "polished";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: background-color 0.2s ease-out;
  background-color: ${({ clientX, clientY, clientWidth, clientHeight }) => {
    const r = Math.round((clientX / clientWidth) * 255);
    const b = Math.round((clientY / clientHeight) * 255);
    const g = Math.round(
      ((clientX + clientY / 2) / (clientHeight + clientWidth / 2)) * 255
    );
    return rgba(r, g, b, 0.1);
  }};
`;
