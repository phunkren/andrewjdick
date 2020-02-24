import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = styled(Img)`
  width: 100%;
  min-width: 44px;
`;

export const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 440, maxHeight: 410) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Image fluid={data.fileName.childImageSharp.fluid} alt="Site logo" />;
};
