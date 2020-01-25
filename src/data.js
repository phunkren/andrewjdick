import React, { Fragment } from 'react';
import { H4, Text } from './styles/typography';
import { ExternalLink } from './components/Link';

export const EXPERIENCE = [
  {
    position: 'Senior engineer',
    company: 'BCG Digital Ventures',
    url: 'https://www.bcgdv.com/',
    dates: 'April 2019 - Present',
    description: () => (
      <Fragment>
        <Text as="p">
          As a senior engineer I collaborate with design, UX, growth, and
          product cohorts to engineer a robust and well documented product that
          can be successfully taken to market by a startup business. It is also
          my responsibility to support lead and mentor associate engineers
          wherever possible.
        </Text>

        <H4>Notable work</H4>

        <ul>
          <li>
            <ExternalLink href="https://my.beema.ae" highlight>
              Beema
            </ExternalLink>
          </li>
        </ul>
      </Fragment>
    ),
  },
  {
    position: 'Frontend engineer',
    company: 'Fathom',
    url: 'https://fath.om',
    dates: 'June 2017 - March 2019',
    description: () => (
      <Fragment>
        <Text as="p">
          Working at Fathom allowed me to work alongside a number of
          highly-skilled professionals on a range of challenging fintech
          projects. The majority of my time was spent working with React, with
          additional exposure to React Native, GatsbyJS and Angular 2.
        </Text>

        <H4>Notable work</H4>

        <ul>
          <li>
            <ExternalLink
              href="https://help.anaplan.com/anapedia/Content/Mobile/Anaplan-mobile-app.htm"
              highlight
            >
              Anaplan
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://fath.om/2017/09/11/access-fintech.html"
              highlight
            >
              Access Fintech
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.commerzbank.com/" highlight>
              Commerzbank
            </ExternalLink>
          </li>
        </ul>
      </Fragment>
    ),
  },
  {
    position: 'Associate engineer',
    company: 'Cohaesus',
    url: 'https://cohaesus.co.uk/',
    dates: 'Feb 2015 - June 2017',
    description: () => (
      <Fragment>
        <Text as="p">
          Cohaesus is a commerical advertising agency where I learned the
          fundamentals of frontend web development. During my time with them I
          worked both in-house and off-site at some of London's top advertising
          agencies, on both green field and legacy codebases.
        </Text>

        <H4>Notable work</H4>

        <ul>
          <li>
            <ExternalLink href="https://www.highlandparkwhisky.com" highlight>
              Highland Park
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.fatface.com/" highlight>
              Fat Face
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://cohaesus.co.uk/work/wwf/" highlight>
              WWF
            </ExternalLink>
          </li>
        </ul>
      </Fragment>
    ),
  },
  {
    position: 'QA tester',
    company: 'Rockstar North',
    url: 'https://www.rockstarnorth.com',
    dates: 'May 2014 – Feb 2015',
    description: () => (
      <Fragment>
        <Text as="p">
          Credited as a QA Tester on Grand Theft Auto V, I was responsible for
          finding, reproducing, and accurately reporting issues in detailed bug
          reports. It also involved providing clear and concise critical
          analysis and feedback of reported issues and executing functionality,
          regression, and user acceptance testing across various platforms.
        </Text>
      </Fragment>
    ),
  },
];

export const EDUCATION = [
  {
    qualification: 'BSc (Hons) 2.1',
    course: 'Audio Technology & Multimedia',
    institute: 'Glasgow Caledonian University',
    dates: '2010 - 2014',
  },
  {
    qualification: 'Graduate',
    course: 'Frontend Nanodegree',
    institute: 'Udacity',
    dates: '2016',
  },
];

export const EXPERTISE = ['HTML', 'CSS/SCSS', 'JavaScript', 'React'];

export const INTERESTS = ['react native', 'gatsbyjs', 'graphQL', 'css-in-js'];

export const HOBBIES = ['cycling', 'guitar', 'video games', 'rugby'];
