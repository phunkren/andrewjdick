import React from 'react';
import { Transition, Spring, Trail } from 'react-spring/renderprops';
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
            from={mount && { s: 0.92 }}
            enter={mount && { s: 1 }}
            leave={!mount && { o: 0 }}
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
            from={{ o: 0 }}
            enter={{ o: 1 }}
            leave={{ o: 0 }}
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
    home: [{ rem: 0, percentage: 100 }, { border: -100 }],
    page: [{ rem: 12.5, percentage: 0 }, { border: 0 }],
    blog: [{ rem: 25, percentage: 0 }, { border: 0 }],
  };

  const easing = t => d3.easeSinIn(t);

  const configs = {
    home: key =>
      key === 'border'
        ? {
            duration: 200,
            delay: 0,
            easing,
          }
        : {
            duration: 400,
            delay: 200,
            easing,
          },
    page: key =>
      key === 'border'
        ? {
            duration: 200,
            delay: 600,
            easing,
          }
        : {
            duration: 400,
            delay: 0,
            easing,
          },
    blog: key =>
      key === 'border'
        ? {
            duration: 200,
            delay: 600,
            easing: t => d3.easeSinIn(t),
          }
        : {
            duration: 200,
            delay: 100,
            easing: t => d3.easeSinIn(t),
          },
  };

  const currentPosition = positions[variant];
  const currentConfig = configs[variant];

  return (
    <Spring
      native
      items={currentPosition}
      to={{
        rem: currentPosition[0].rem,
        percentage: currentPosition[0].percentage,
        border: currentPosition[1].border,
      }}
      config={currentConfig}
    >
      {props => children(props)}
    </Spring>
  );
};

export const BlogTrail = ({ items, children }) => {
  return (
    <Trail
      native
      items={items}
      keys={({ node }) => node.id}
      from={{ s: 0.92 }}
      to={{ s: 1 }}
      config={{ duration: 400, easing: t => d3.easeSinOut(t) }}
    >
      {item => props => children(item, props)}
    </Trail>
  );
};
