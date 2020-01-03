import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Link } from "../components/Link";
import { TitleAndMetaTags } from "../components/TitleAndMetaTags";

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`;

const Status = styled.h1`
  font-size: 4rem;
  line-height: 4.4rem;
  margin-bottom: 10px;
  text-align: center;
`;

const Info = styled.p`
  padding-bottom: 0;
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
`;

const StyledLink = styled.p`
  display: inline-block;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export default function NotFound() {
  return (
    <Layout>
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
    </Layout>
  );
}
