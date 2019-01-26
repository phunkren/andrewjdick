import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "components/Link";
import { Section, Header, Status, Info, StyledLink } from "./styles";

export const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>Andrew James Dick | Page Not Found</title>
    </Helmet>
    <Header>
      <Link href="/">
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
