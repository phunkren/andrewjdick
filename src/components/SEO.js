import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

export const SEO = ({ title, description, image, pathname, article }) => (
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
      fileName: { imagePath },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image ? `${siteUrl}${image}` : imagePath,
        url: `${siteUrl}${pathname || '/'}`,
        type: article ? 'article' : 'website',
      };

      return (
        <>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={seo.title}
            titleTemplate={title && titleTemplate}
          >
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content={seo.type} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:creator" content={twitterHandle} />
            <meta property="twitter:title" content={seo.title} />
            <meta property="twitter:description" content={seo.description} />
            <meta property="twitter:image" content={seo.image} />
          </Helmet>
        </>
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
    fileName: file(relativePath: { eq: "images/logo.png" }) {
      imagePath: absolutePath
    }
  }
`;

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
};
