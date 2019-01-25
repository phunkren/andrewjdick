import React, { Fragment } from "react";

export const EXPERIENCE = [
  {
    position: "Frontend developer",
    company: "Fathom",
    url: "https://fath.om",
    dates: "Feb 2015 - June 2017",
    description: () => (
      <Fragment>
        <p>
          Working at Fathom has provided me with the opportunity of working
          alongside a number of highly-skilled professionals on a diverse range
          of challenging front end web projects. The majority of my time has
          been spent working with React, but I've also been fortunate enough to
          get hands-on experience with React Native, GatsbyJS and Angular 2.
        </p>
        <p>
          Alongside the tech stack, my time at Fathom has also encouraged me to
          advance my public speaking, writing, and introduced me to boxing and
          cycling outside of work.
        </p>
      </Fragment>
    )
  },
  {
    position: "Associate developer",
    company: "Cohaesus Projects Ltd",
    url: "https://cohaesus.co.uk/",
    dates: "Feb 2015 - June 2017",
    description: () => (
      <Fragment>
        <p>
          I have over two years of experience working in teams of various sizes
          on commercial front-end web projects. Originally hired as a Trainee
          developer, I’ve since progressed through Junior and into the Associate
          role by completing several technical segments and consistently
          delivering client-based work to my highest possible standard.
        </p>
        <ul>
          <li>
            Contributed to commercial projects on-site at top advertising
            agencies.
          </li>
          <li>
            Experience with both Agile and waterfall project environments.
          </li>
          <li>
            Led internal projects, and provided in-house technical support.
          </li>
          <li>
            Worked on both green-field projects and inherited legacy code.
          </li>
          <li>
            Hosted workshops and technical training sessions for junior
            developers.
          </li>
          <li>
            Represented the business overseas at international training events.
          </li>
        </ul>
      </Fragment>
    )
  },
  {
    position: "QA Tester",
    company: "Rockstar North",
    url: "https://www.rockstarnorth.com",
    dates: "May 2014 – Feb 2015",
    description: () => (
      <Fragment>
        <p>
          Credited as a QA Tester on Grand Theft Auto V, I was primarily
          responsible for identifying defects, errors, and failures in the
          software. These were cross-referenced over multiple databases;
          undiscovered bugs were logged, and pre-existing issues were updated.
        </p>
        <ul>
          <li>
            Experience with functionality, regression, and user acceptance
            testing.
          </li>
          <li>
            Co-ordinated with up to 30 team members across multiple studios.
          </li>
          <li>
            Led a small team of four on previously unreleased alpha content.
          </li>
        </ul>
      </Fragment>
    )
  }
];

export const EDUCATION = [
  {
    qualification: "BSc (Hons) 2.1",
    course: "Audio Technology & Multimedia",
    institute: "Glasgow Caledonian University",
    dates: "2010 - 2014"
  },
  {
    qualification: "Graduate",
    course: "Frontend Nanodegree",
    institute: "Udacity",
    dates: "2016"
  }
];

export const EXPERTISE = [
  {
    id: "HTML",
    rating: 5
  },
  {
    id: "CSS",
    rating: 5
  },
  {
    id: "JavaScript",
    rating: 4
  },
  {
    id: "Git",
    rating: 3
  }
];

export const INTERESTS = [
  "react",
  "react native",
  "gatsbyjs",
  "graphQL",
  "css-in-js"
];

export const HOBBIES = [
  "cycling",
  "boxing",
  "video games",
  "guitar",
  "cooking",
  "rugby"
];
