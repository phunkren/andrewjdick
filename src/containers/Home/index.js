import React, { Fragment } from "react";
import { Social } from "./Social";
import { Navigation } from "./Navigation";
import { ExternalLink } from "components/Link";
import { CONTACT_DETAILS } from "constants.js";
import { Header, Section, Name, Info, Footer, FooterNavigation } from "./styles";

export const Home = () => {
  const { name, position, location } = CONTACT_DETAILS;

  return (
    <Fragment>
      <Header>
        <Navigation />
        <Social />
      </Header>

      <Section>
        <Name>{name}</Name>
        <Info>
          {position} @{" "}
          <ExternalLink href="https://fath.om">Fathom</ExternalLink>
        </Info>
        <Info>{location}</Info>
      </Section>

      <Footer>
        <FooterNavigation />
      </Footer>
    </Fragment>
  );
};
