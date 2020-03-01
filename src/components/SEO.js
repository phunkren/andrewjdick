import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export const SEO = ({ title, description, image, pathname, meta, article }) => {
  const {
    site: { siteMetadata },
    socialJson: { social },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            siteUrl
            image
          }
        }
        socialJson {
          social {
            twitter {
              handle
              url
            }
          }
        }
      }
    `,
  );

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
    url: `${siteMetadata.siteUrl}${pathname || '/'}`,
    type: article ? 'article' : 'website',
  };

  const seoMeta = [
    {
      name: `description`,
      content: seo.description,
    },
    {
      property: `og:title`,
      content: seo.title,
    },
    {
      property: `og:description`,
      content: seo.description,
    },
    {
      property: `og:type`,
      content: seo.type,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: social.twitter.handle,
    },
    {
      name: `twitter:title`,
      content: seo.title,
    },
    {
      name: `twitter:description`,
      content: seo.description,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={seo.title}
      titleTemplate={title && siteMetadata.titleTemplate}
      meta={seoMeta}
    />
  );
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  meta: [],
  pathname: null,
  article: false,
};
