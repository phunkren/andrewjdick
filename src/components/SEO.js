import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO = ({
  title,
  description,
  image,
  imageAlt,
  published,
  canonical,
  article,
}) => {
  const { origin, pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    defaultImageAlt,
    siteUrl,
    author: { name },
    twitter,
  } = site.siteMetadata;

  const seo = {
    name: siteUrl,
    title: title ? `${title} | Andrew James` : defaultTitle,
    description: description || defaultDescription,
    image: `${origin}/${image || defaultImage}`,
    imageAlt: imageAlt || defaultImageAlt,
    url: `${origin}${pathname}`,
    canonical: canonical || `${origin}${pathname}`,
    content: article ? 'article' : 'website',
    published: published ? new Date(published).toISOString() : null,
  };

  const microLinkApi = 'https://i.microlink.io/';
  const microCardTitle = title || defaultTitle;
  const microCardQuery = `https://cards.microlink.io/?preset=ajames&title=${microCardTitle}&subtitle=${seo.description}&image=${image}`;
  const microCardUrl = `${microLinkApi}${encodeURIComponent(microCardQuery)}`;

  return (
    <Helmet title={seo.title}>
      <html lang="en" amp />

      <link rel="canonical" href={seo.canonical} />

      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={microCardUrl} />
      <meta itemProp="image" content={microCardUrl} />

      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={microCardUrl} />
      <meta property="og:type" content={seo.content} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:image" content={microCardUrl} />
      <meta name="twitter:image:alt" content={seo.imageAlt} />

      {article && <meta property="article:author" content={name} />}
      {article && (
        <meta property="article:published_time" content={seo.published} />
      )}
      {article && <meta property="article:section" content="technology" />}
      {article && <meta property="article:tag" content="web" />}
      {article && <meta property="article:tag" content="frontend" />}
      {article && <meta property="article:tag" content="software" />}
      {article && <meta property="article:tag" content="engineering" />}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  canonical: PropTypes.string,
  published: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  imageAlt: null,
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
        defaultImage: image
        defaultImageAlt: imageAlt
        siteUrl: url
        twitter
        author {
          name
        }
      }
    }
  }
`;
