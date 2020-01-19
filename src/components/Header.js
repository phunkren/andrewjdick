import React, { Fragment } from "react";
import styled from "styled-components";
import { Navigation } from "./Navigation";
import { Social } from "./Social";
import { MEDIA } from "../styles/media";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  ${MEDIA.tablet`
    justify-content: space-between;
  `};
`;

const RawHeader = () => {
  return (
    <Fragment>
      <StyledHeader>
        <Navigation />
        <Social />
      </StyledHeader>
    </Fragment>
  );
};

export const Header = styled(RawHeader)``;
