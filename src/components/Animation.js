import React from 'react';
import { Transition, Spring } from 'react-spring/renderprops';
import { TransitionState } from 'gatsby-plugin-transition-link';
import * as d3 from 'd3-ease';

export const FadeThrough = ({ children }) => {
  return (
    <TransitionState>
      {({ transitionStatus, exit, entry }) => {
        const mount = ['entered', 'entering'].includes(transitionStatus);
        const duration = mount ? entry.length : exit.length;

        return (
          <Transition
            native
            items={mount}
            from={mount && { transform: 'scale(0.92)' }}
            enter={mount && { transform: 'scale(1)' }}
            leave={!mount && { opacity: '0' }}
            config={{
              duration: duration ? duration * 1000 : 300,
              easing: t => d3.easeCubicOut(t),
            }}
          >
            {() => props => children(props)}
          </Transition>
        );
      }}
    </TransitionState>
  );
};

export const FadeIn = ({ children }) => {
  return (
    <TransitionState>
      {({ transitionStatus }) => {
        const mount = ['entered', 'entering'].includes(transitionStatus);

        return (
          <Transition
            native
            items={mount}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={[{ duration: 210, easing: t => d3.easeSinOut(t) }]}
          >
            {mount => mount && (props => children(props))}
          </Transition>
        );
      }}
    </TransitionState>
  );
};

export const HeroSpring = ({ variant, children }) => {
  const positions = {
    home: { rem: 0, percentage: 100 },
    page: { rem: 12.5, percentage: 0 },
    blog: { rem: 25, percentage: 0 },
  };

  const configs = {
    home: { duration: 800, delay: 0, easing: t => d3.easeSinOut(t) },
    page: { duration: 400, delay: 0, easing: t => d3.easeSinOut(t) },
    blog: { duration: 300, delay: 0, easing: t => d3.easeSinOut(t) },
  };

  const currentPosition = positions[variant];
  const currentConfig = configs[variant];

  return (
    <Spring
      native
      items={currentPosition}
      to={{
        transform: `translate3d(0, calc(-100% + ${currentPosition.rem}rem + ${currentPosition.percentage}%), 0)`,
      }}
      config={currentConfig}
    >
      {props => children(props)}
    </Spring>
  );
};
