import React, { Fragment } from "react";
import { Transition, config } from "react-spring/renderprops";
import { ExternalLink } from "components/Link";
import { TitleAndMetaTags } from "components/TitleAndMetaTags";
import { EXPERIENCE } from "pages/CV/data";
import { Social } from "./Social";
import { Navigation } from "./Navigation";
import { CONTACT_DETAILS } from "constants.js";
import {
  Header,
  Section,
  Name,
  Info,
  Footer,
  FooterSocial,
  BackgroundCredit,
  Legal,
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
            items={renderAnimations}
            config={config.molasses}
            enter={[{ opacity: 0.04, top: -1500 }]}
            leave={{ opacity: 0, top: -2000 }}
          >
            {renderAnimations =>
              renderAnimations && (props => <Image style={props} />)
            }
          </Transition>

          <Header>
            <Navigation />
            <Social />
          </Header>

          <Section>
            <Name>{name}</Name>
            <Info>
              {currentEmployer.position} <At>@</At>{" "}
              <ExternalLink
                href={currentEmployer.url}
                alt={`${currentEmployer.company}'s website`}
                aria-label={`${currentEmployer.company}'s website`}
                withHighlight
              >
                {currentEmployer.company}
              </ExternalLink>
            </Info>
            <Info>{location}</Info>
          </Section>

          <Footer>
            <FooterSocial />
            <BackgroundCredit>
              background courtesy of{" "}
              <ExternalLink
                href="https://absurd.design/"
                alt="absurd.design"
                aria-label="absurd.design"
                withHighlight
              >
                absurd.design
              </ExternalLink>
            </BackgroundCredit>
            <Legal>&copy; 2020</Legal>
          </Footer>
        </Wrapper>
      </Fragment>
    );
  }
}
