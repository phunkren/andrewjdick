/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title, subtitle, image, canonical }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            url
            description
            author {
              name
            }
          }
        }
      }
    `,
  );

  const seo = {
    title: title || site.siteMetadata.title,
    description: subtitle || site.siteMetadata.description,
    url: canonical || site.siteMetadata.url,
  };

  const microLinkApi = 'https://i.microlink.io/';
  const microCardUrl = `https://cards.microlink.io/?preset=ajames&title=${seo.title}&subtitle=${seo.description}&bg.image="https://ajames.dev/logo.jpg"`;
  const microCard = `${microLinkApi}${encodeURIComponent(microCardUrl)}`;

  console.log(microCard);
  return (
    <Helmet title={seo.title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="en" amp />

      <link rel="canonical" href={seo.url} />

      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={microCard} />
      <meta itemProp="image" content={microCard} />

      <meta property="og:type" content="website" />
      <meta property="og:image" content={microCard} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:creator" content={site.siteMetadata.twitter} />
      <meta name="twitter:image" content={microCard} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  canonical: PropTypes.string,
};

export default SEO;
