import React from 'react';
import styled from 'styled-components';
import { Theme } from './Theme';
import { GlobalStyles } from '../styles/global';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  position: relative;
`;

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
`;

export const Layout = styled(({ children, className }) => {
  return (
    <Theme theme="light">
      <>
        <GlobalStyles />
        <Container className={className}>
          <Wrapper>{children}</Wrapper>
        </Container>
      </>
    </Theme>
  );
})``;
