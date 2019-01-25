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

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`;

export const Name = styled.h1`
  font-size: 4rem;
  line-height: 4.4rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const Info = styled.p`
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
`;
