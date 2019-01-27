import React, { Fragment } from "react";
import MediaQuery from "react-responsive";
import { Social } from "./Social";
import { Navigation } from "./Navigation";
import { ExternalLink } from "components/Link";
import { CONTACT_DETAILS } from "constants.js";
import { SIZES } from "media.js";
import { Header, Section, Name, Info, Footer } from "./styles";

export const Home = () => {
  const { name, position, location } = CONTACT_DETAILS;

  return (
    <Fragment>
      <Header>
        <MediaQuery minDeviceWidth={SIZES.tablet}>
          <Navigation />
        </MediaQuery>
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

      <MediaQuery maxDeviceWidth={SIZES.tablet}>
        <Footer>
          <Navigation />
        </Footer>
      </MediaQuery>
    </Fragment>
  );
};
