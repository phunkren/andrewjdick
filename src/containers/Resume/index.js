import React, {Fragment} from "react";
import { Helmet } from "react-helmet";
import {Container } from './styles';

export const Resume = () => (
    <Fragment>
      <Helmet>
        <title>Andrew James Dick | Resume </title>
      </Helmet>
      <Container>
        <h1>CV</h1>
      </Container>
    </Fragment>
);
