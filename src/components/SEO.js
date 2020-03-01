import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

export const SEO = ({ title, description, image, pathname, meta, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
        },
      },
      socialJson: {
        social: {
          twitter: { twitterHandle, twitterUrl },
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
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
          content: twitterHandle,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        ...meta,
      ];

      return (
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={seo.title}
          titleTemplate={title && titleTemplate}
          meta={seoMeta}
        />
      );
    }}
  />
);

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        titleTemplate
        siteUrl
      }
    }
    socialJson {
      social {
        twitter {
          twitterHandle: handle
          twitterUrl: url
        }
      }
    }
  }
`;

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  meta: [],
  pathname: null,
  article: false,
};

//  <meta name="description" content={seo.description} />
// <meta name="image" content={seo.image} />
// <meta property="og:url" content={seo.url} />
// <meta property="og:type" content={seo.type} />
// <meta property="og:title" content={seo.title} />
// <meta property="og:description" content={seo.description} />
// <meta property="og:image" content={seo.image} />
// <meta name="twitter:card" content="summary" />
// <meta name="twitter:creator" content={twitterHandle} />
// <meta name="twitter:title" content={seo.title} />
// <meta name="twitter:description" content={seo.description} />
// <meta name="twitter:image" content={seo.image} />
// </Helmet>
