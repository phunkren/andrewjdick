import React from 'react';
import Div100vh from 'react-div-100vh';
import styled from 'styled-components';
import { SEO } from '../components/SEO';
import { Text } from '../components/Text';
import { fadeInAnimation } from '../styles/animation';
import { MEDIA } from '../styles/media';

const Wrapper = styled(Div100vh)`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1;
  text-align: center;
`;

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  width: 100%;
  padding: 0 var(--spacing-medium);
  color: var(--color-white);
  ${fadeInAnimation};
  animation-delay: 0.75s;

  ${MEDIA.tablet`
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 var(--spacing-large);
  `}
`;

const Title = styled(Text)`
  color: var(--color-orange-400);
  text-shadow: 2px 2px var(--color-charcoal);
`;

export default function NotFound({ location: { pathname } }) {
  return (
    <>
      <SEO
        path={pathname}
        title="Not found"
        description="Sorry, we can't find that page!"
      />
      <Wrapper>
        <Main>
          <Section aria-label="Profile">
            <Title as="h1" size="5xl">
              404
            </Title>
            <Text size="l">Page not found</Text>
          </Section>
        </Main>
      </Wrapper>
    </>
  );
}
