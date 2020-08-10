import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { generateMicroCardUrl } from '../utils/generateMicroCardUrl';

export const SEO = ({
  path,
  title,
  description,
  published,
  canonical,
  article,
}) => {
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        defaultDescription,
        defaultImage,
        defaultImageAlt,
        siteUrl,
        author: { name },
        twitter,
      },
    },
  } = useStaticQuery(query);

  const seo = {
    name: siteUrl,
    title: title ? `${title} | Andrew James` : defaultTitle,
    description: description || defaultDescription,
    imageAlt: defaultImageAlt,
    url: path ? `${siteUrl}${path}` : siteUrl,
    content: article ? 'article' : 'website',
    article: {
      section: 'technology',
      published: published ? new Date(published).toISOString() : null,
      tags: ['web', 'frontend', 'software', 'engineering'],
    },
    microCard: {
      title: title || defaultTitle,
      subtitle: description || defaultDescription,
    },
  };

  const microCardUrl = generateMicroCardUrl(seo.microCard);

  return (
    <Helmet title={seo.title}>
      <html lang="en" amp />

      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={defaultImage} />
      <meta itemProp="image" content={microCardUrl} />

      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:type" content={seo.content} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:image" content={microCardUrl} />
      <meta name="twitter:image:alt" content={seo.imageAlt} />

      {canonical && <link rel="canonical" href={canonical} />}

      {article && <meta property="article:author" content={name} />}
      {article && (
        <meta property="article:section" content={seo.article.section} />
      )}
      {article && (
        <meta
          property="article:published_time"
          content={seo.article.published}
        />
      )}
      {article &&
        seo.article.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  defaultImageAlt: PropTypes.string,
  defaultImage: PropTypes.string,
  canonical: PropTypes.string,
  published: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  subtitle: null,
  defaultImageAlt: null,
  defaultImage: null,
  canonical: null,
  published: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImageAlt: imageAlt
        defaultImage: image
        siteUrl: url
        twitter
        author {
          name
        }
      }
    }
  }
`;
