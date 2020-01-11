---
path: /blog/2018-05-13-bridging-a-gap-between-engineering-and-design-with-a-simple-grid-overlay
title: Bridging a gap between engineering and design with a simple grid overlay
image: ../src/assets/images/bridge-gap.jpg
date: 2018-05-13
---

One of my favourite talks to come out of ReactFest London was Siddharth Kshetrapal’s presentation on Design Systems. As he explained that design systems can fall short due to miscommunication amongst the project disciplines, I was reminded of a similar experience with a designer on a React project. We were discussing the inconsistencies in vertical rhythm between his design and the application’s frontend build. To illustrate his point, he opened the design in Sketch and enabled the grid view.

Sketch’s design grid (source: https://designcode.io/cloud/sketch/Sketch-Material-Design%202.jpeg)

Sketch’s grid is a visual overlay allowing designers to create a high precision layout. I assumed that constant spacing between components would result in consistent vertical rhythm. However, the demonstration highlighted that despite the components being evenly distributed on the page, their content was not.

Vertical Rhythm (source: https://builttoadapt.io/8-point-grid-vertical-rhythm-90d05ad95032)

Since the application was designed with a grid overlay, I put together a similar treatment for the front end. A prop was added to the View component to accept one of three options. If the prop is declared, a class is conditionally appended to the component’s class list based on the prop’s value.

The repeating-linear-gradient function generates the grid lines and is comprised of two sections; a transparent interval, and a coloured grid line. Named arguments allow each line’s color, width, and interval spacing to be configured, with default values serving as a fallback.

With the overlay in place, we can now accurately compare the vertical rhythm of our Sketch design with the production build, and edge a little closer to pixel perfect design (if that’s your bag). To demonstrate the output, I quickly added the overlay to a personal site.

gridOverlay=”horizontal” emulates Sketch’s regular grid, where “vertical” resembles the layout grid.
The overlay brought with it a sense of accomplishment. Aside from it’s obvious functional benefit, we understood one another’s approach to the project, and optimised our workflow as a result. Each of these progressions, however minor, further enriches a formulated middle ground, where I believe lies a truly collaborative effort and yields the best results.
