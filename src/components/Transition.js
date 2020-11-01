import React from 'react';
import { Transition } from 'react-spring/renderprops';
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
            {mount => props => children(props)}
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
            from={{ opacity: 0.25 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={[{ duration: 310, easing: t => d3.easeSinOut(t) }]}
          >
            {mount => mount && (props => children(props))}
          </Transition>
        );
      }}
    </TransitionState>
  );
};
