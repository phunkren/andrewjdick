import React, { Fragment } from "react";
import { Spring } from "react-spring";
import { ExternalLink } from "components/Link";
import { TitleAndMetaTags } from "components/TitleAndMetaTags";
import { EXPERIENCE } from "containers/CV/data";
import { Social } from "./Social";
import { Navigation } from "./Navigation";
import { CONTACT_DETAILS } from "constants.js";
import css3Icon from "./icons/css3.svg";
import gatsbyIcon from "./icons/gatsby.svg";
import gitIcon from "./icons/git.svg";
import graphqlIcon from "./icons/graphql.svg";
import html5Icon from "./icons/html5.svg";
import javascriptIcon from "./icons/javascript.svg";
import netlifyIcon from "./icons/netlify.svg";
import npmIcon from "./icons/npm.svg";
import reactIcon from "./icons/react.svg";
import yarnIcon from "./icons/yarn.svg";
import {
  Header,
  Section,
  Name,
  Info,
  Footer,
  FooterNavigation,
  Wrapper,
  Image,
  StyledParticles
} from "./styles";

export const Home = () => {
  const { name, position, location } = CONTACT_DETAILS;
  const currentEmployer = EXPERIENCE[0];

  return (
    <Fragment>
      <TitleAndMetaTags />
      <Wrapper>
        <StyledParticles
          params={{
            retina_detect: true,
            particles: {
              shape: {
                type: "images",
                images: [
                  {
                    src: css3Icon,
                    height: 10,
                    width: 10
                  },
                  {
                    src: gatsbyIcon,
                    height: 10,
                    width: 10
                  },
                  {
                    src: gitIcon,
                    height: 10,
                    width: 10
                  },
                  {
                    src: graphqlIcon,
                    height: 10,
                    width: 10
                  },
                  {
                    src: html5Icon,
                    height: 10,
                    width: 10
                  },
                  {
                    src: javascriptIcon,
                    height: 10,
                    width: 10
                  },
                  {
                    src: netlifyIcon,
                    height: 10,
                    width: 10
                  },
                  {
                    src: npmIcon,
                    height: 10,
                    width: 10
                  },
                  {
                    src: reactIcon,
                    height: 10,
                    width: 10
                  },
                  {
                    src: yarnIcon,
                    height: 10,
                    width: 10
                  }
                ]
              },
              move: {
                direction: "top",
                random: false,
                straight: true,
                out_mode: "out",
                speed: 1,
                attract: {
                  enable: false
                }
              },
              number: {
                value: 10,
                density: {
                  enable: true,
                  value_area: 1750
                }
              },
              size: {
                value: 40
              }
            }
          }}
        />

        <Spring from={{ opacity: 0 }} to={{ opacity: 0.05 }}>
          {props => <Image style={props} />}
        </Spring>

        <Spring delay={2200} from={{ top: -75 }} to={{ top: 0 }}>
          {props => (
            <Header style={props}>
              <Navigation />
              <Social />
            </Header>
          )}
        </Spring>

        <Spring
          delay={2000}
          from={{ transform: "scale(0.9)", opacity: 0 }}
          to={{ transform: "scale(1)", opacity: 1 }}
        >
          {props => (
            <Section style={props}>
              <Name>{name}</Name>
              <Info>
                {position} @{" "}
                <ExternalLink
                  href={currentEmployer.url}
                  alt={`${currentEmployer.company}'s website`}
                  aria-label={`${currentEmployer.company}'s website`}
                >
                  {currentEmployer.company}
                </ExternalLink>
              </Info>
              <Info>{location}</Info>
            </Section>
          )}
        </Spring>

        <Spring delay={2700} from={{ bottom: -75 }} to={{ bottom: 0 }}>
          {props => (
            <Footer style={props}>
              <FooterNavigation />
            </Footer>
          )}
        </Spring>
      </Wrapper>
    </Fragment>
  );
};
