import React, { Fragment } from "react";
import { Spring, Transition, config } from "react-spring/renderprops";
import { ExternalLink } from "components/Link";
import { TitleAndMetaTags } from "components/TitleAndMetaTags";
import { EXPERIENCE } from "containers/CV/data";
import { Social } from "./Social";
import { Navigation } from "./Navigation";
import { CONTACT_DETAILS } from "constants.js";
import {
  Header,
  Section,
  Name,
  Info,
  Footer,
  FooterNavigation,
  BackgroundCredit,
  Wrapper,
  Image,
  At
} from "./styles";

export class Home extends React.Component {
  state = { renderAnimations: false };

  componentDidMount() {
    this.setState({ renderAnimations: true });
  }

  componentWillUnmount() {
    this.setState({ renderAnimations: false });
  }

  render() {
    const { renderAnimations } = this.state;
    const { name, location } = CONTACT_DETAILS;
    const currentEmployer = EXPERIENCE[0];

    return (
      <Fragment>
        <TitleAndMetaTags />
        <Wrapper>
          <Transition
            native
            delay={1000}
            items={renderAnimations}
            config={config.molasses}
            from={{ opacity: 0, top: -4000 }}
            enter={[{ opacity: 0.05, top: 0 }]}
            leave={{ opacity: 0, top: -4000 }}
          >
            {renderAnimations =>
              renderAnimations && (props => <Image style={props} />)
            }
          </Transition>

          <Transition
            native
            items={renderAnimations}
            delay={3900}
            config={config.wobbly}
            from={{ top: -100 }}
            enter={[{ top: 0 }]}
            leave={{ top: -100 }}
          >
            {renderAnimations =>
              renderAnimations &&
              (props => (
                <Header style={props}>
                  <Navigation />
                  <Social />
                </Header>
              ))
            }
          </Transition>

          <Section>
            <Transition
              native
              items={renderAnimations}
              delay={3000}
              config={config.stiff}
              from={{ overflow: "hidden", height: 0 }}
              enter={[{ height: "auto" }]}
              leave={{ height: 0 }}
            >
              {renderAnimations =>
                renderAnimations && (props => <Name style={props}>{name}</Name>)
              }
            </Transition>

            <Spring
              native
              delay={3100}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => (
                <Fragment>
                  <Info style={props}>
                    {currentEmployer.position}{" "}
                    <Spring
                      native
                      delay={3900}
                      from={{ transform: "rotate(-360deg)" }}
                      to={{ transform: "rotate(0)" }}
                    >
                      {props => <At style={props}>@</At>}
                    </Spring>
                    <ExternalLink
                      href={currentEmployer.url}
                      alt={`${currentEmployer.company}'s website`}
                      aria-label={`${currentEmployer.company}'s website`}
                    >
                      {" "}
                      {currentEmployer.company}
                    </ExternalLink>
                  </Info>
                  <Info style={props}>{location}</Info>
                </Fragment>
              )}
            </Spring>
          </Section>

          <Transition
            native
            items={renderAnimations}
            delay={3900}
            config={config.wobbly}
            from={{ bottom: -100 }}
            enter={[{ bottom: 0 }]}
            leave={{ bottom: -100 }}
          >
            {renderAnimations =>
              renderAnimations &&
              (props => (
                <Footer style={props}>
                  <FooterNavigation />
                  <BackgroundCredit>
                    background courtesy of
                    <ExternalLink
                      href="https://absurd.design/"
                      alt="absurd.design"
                      aria-label="absurd.design"
                    >
                      {" "}
                      absurd.design
                    </ExternalLink>
                  </BackgroundCredit>
                </Footer>
              ))
            }
          </Transition>
        </Wrapper>
      </Fragment>
    );
  }
}
