import React, { Fragment } from "react";
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
  FooterNavigation
} from "./styles";

export const Home = () => {
  const { name, position, location } = CONTACT_DETAILS;
  const currentEmployer = EXPERIENCE[0];

  return (
    <Fragment>
      <TitleAndMetaTags />

      <Header>
        <Navigation />
        <Social />
      </Header>

      <Section>
        <Name>{name}</Name>
        <Info>
          {position} @{" "}
          <ExternalLink
            href={currentEmployer.url}
            alt={`${currentEmployer.company}'s website`}
            aria-label={`${currentEmployer.company}'s website`}
          >
            Fathom
          </ExternalLink>
        </Info>
        <Info>{location}</Info>
      </Section>

      <Footer>
        <FooterNavigation />
      </Footer>
    </Fragment>
  );
};
