import React, { Fragment } from "react";
import { Link } from "components/Link";
import { TitleAndMetaTags } from "components/TitleAndMetaTags";
import { Section, Header, Status, Info, StyledLink } from "./styles";

export const NotFound = () => (
  <Fragment>
    <TitleAndMetaTags title="Page Not Found" />

    <Header>
      <Link
        href="/"
        alt="Return to the homepage"
        aria-label="Return to the homepage"
      >
        <span>←</span>
        <StyledLink>Return to site</StyledLink>
      </Link>
    </Header>
    <Section>
      <Status>404</Status>
      <Info>Page Not Found</Info>
    </Section>
  </Fragment>
);
