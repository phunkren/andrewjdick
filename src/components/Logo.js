import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MEDIA } from '../styles/media';

const Image = styled(Img)`
  width: 100%;
  min-width: 50px;
  border-radius: 50%;

  ${MEDIA.tablet`
    width: 60px;
  `}
`;

export const Logo = props => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "images/avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 60, maxHeight: 60, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Image
      fluid={data.fileName.childImageSharp.fluid}
      alt="Site logo"
      {...props}
    />
  );
};
