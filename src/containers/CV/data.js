import React, { Fragment } from "react";

export const EXPERIENCE = [
  {
    position: "Frontend developer",
    company: "Fathom",
    url: "https://fath.om",
    dates: "June 2017 - Present",
    description: () => (
      <Fragment>
        <p>
          Working at Fathom has provided me with the opportunity of working
          alongside a number of highly-skilled professionals on a diverse range
          of challenging frontend web projects. The majority of my time has been
          spent working with React, but I've also been fortunate enough to
          acquire hands-on experience with React Native, GatsbyJS and Angular 2.
        </p>
        <p>
          Over the years, Fathom has helped instilled a set of base principles
          to strive towards. Complexity should only be introduced when it’s
          inevitable. Code should be easy to reason about and easy to delete.
          Try to avoid abstracting too early and thinking too far in the future.
          Finally, the top priority is always the best possible User Experience.
        </p>
        <p>
          Alongside the tech stack, my time at Fathom has also encouraged me to
          present at the internal tech meetups, publish blog posts, and
          introduced me to boxing and cycling outside of work.
        </p>
      </Fragment>
    )
  },
  {
    position: "Associate developer",
    company: "Cohaesus",
    url: "https://cohaesus.co.uk/",
    dates: "Feb 2015 - June 2017",
    description: () => (
      <Fragment>
        <p>
          I accrued over two years of experience working at Cohaesus in teams of
          various sizes on commercial front-end web projects. Originally hired
          as a Trainee developer, I progressed through Junior and into the
          Associate role by completing several technical segments and
          consistently delivering client-based work on time and to my highest
          possible standard.
        </p>

        <ul>
          <li>
            I primarily worked with HTML and CSS frameworks, but also had the
            opportunity to experience Unity, Wordpress, and the Knockout
            JavaScript framework.
          </li>
          <li>
            Contributed to commercial projects on-site at some of London's top
            advertising agencies.
          </li>
          <li>
            Worked on both green field and legacy projects in both Agile and
            waterfall project environments.
          </li>
          <li>
            Hosted workshops and technical training sessions for Junior
            Developers.
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
          system software. These were cross-referenced over multiple databases;
          undiscovered bugs were logged, and pre-existing issues were updated.
        </p>

        <ul>
          <li>
            Experience with functionality, regression, and user acceptance
            testing.
          </li>
          <li>
            Co-ordinated with up to 30 team members across multiple studios, and
            led a small team of four on previously unreleased alpha content.
          </li>
          <li>Software was version controlled with Perforce</li>
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
    rating: 4
  },
  {
    id: "CSS",
    rating: 5
  },
  {
    id: "JavaScript",
    rating: 3
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
  "guitar",
  "video games",
  "cooking",
  "rugby"
];
