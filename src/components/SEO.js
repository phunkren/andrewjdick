import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export const SEO = ({
  description,
  lang,
  meta,
  title,
  type,
  image,
  pathname,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author {
            name
          }
          description
          siteUrl
        }
      }
      socialJson {
        social {
          twitter {
            handle
            label
            url
          }
        }
      }
    }
  `);

  const { social } = data.socialJson;
  const { siteMetadata } = data.site;

  const metaTitle = title
    ? `${siteMetadata.author.name} | ${title}`
    : `${siteMetadata.author.name}`;

  const metaUrl = pathname
    ? `${siteMetadata.siteUrl}${pathname}`
    : siteMetadata.siteUrl;

  const metaDescription = description || siteMetadata.description;
  const metaImage = `${siteMetadata.siteUrl}/${image}`;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />

      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:site" content={social.twitter.url} />
      <meta name="twitter:creator" content={social.twitter.handle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: 'en',
  title: null,
  description: null,
  image: 'logo.png',
  pathname: '/',
  type: 'website',
};
