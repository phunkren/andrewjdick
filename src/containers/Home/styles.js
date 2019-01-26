import styled from "styled-components";

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
  padding-bottom: 0;
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
`;
