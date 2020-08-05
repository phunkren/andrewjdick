import React, { Fragment, useState } from 'react';
import { Transition } from 'react-spring/renderprops';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Logo } from '../components/Logo';
import { Navigation, MobileNavigation } from '../components/Navigation';
import { IconButton } from '../components/Button';
import { CrossIcon } from './icons/CrossIcon';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { GlobalStyles } from '../styles/global';
import { MEDIA } from '../styles/media';

const Header = styled.header(({ isNavOpen }) => [
  css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    height: 80px;
    z-index: 100;

    ${MEDIA.desktop`
      padding: 0 2em;
    `}

    ${MEDIA.print`
      display: none;
    `}
  `,
  isNavOpen &&
    css`
      background-color: var(--color-white);
    `,
]);

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
`;

const Wrapper = styled(animated.div)`
  flex: 1;
  height: 100%;
`;

const MobileNavigationButton = styled(IconButton)`
  ${MEDIA.desktop`
    display: none;  
  `}
`;

const RawLayout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleMobileNavigation() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Header isNavOpen={isNavOpen}>
          <Link to="/" aria-label="Return to homepage">
            <Logo alt="Website logo" />
          </Link>

          <Navigation />

          <MobileNavigationButton
            aria-label="Navigation menu"
            onClick={toggleMobileNavigation}
          >
            {isNavOpen ? (
              <CrossIcon width="1.5em" height="1.5em" />
            ) : (
              <HamburgerIcon width="1.5em" height="1.5em" />
            )}
          </MobileNavigationButton>
        </Header>

        <Transition
          items={true}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show && (props => <Wrapper style={props}>{children}</Wrapper>)
          }
        </Transition>

        {isNavOpen && <MobileNavigation />}
      </Container>
    </Fragment>
  );
};

export const Layout = styled(RawLayout)``;
