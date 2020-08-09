import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title, subtitle, image, imageAlt, canonical, article }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            url
            description
            twitter
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
    subtitle: article && subtitle ? subtitle : site.siteMetadata.title,
    description: site.siteMetadata.description,
    siteName: `${site.siteMetadata.author.name} | ${site.siteMetadata.description}`,
    url: canonical || site.siteMetadata.url,
    content: article ? 'article' : 'website',
    imgAlt: imageAlt || '',
  };

  const microLinkApi = 'https://i.microlink.io/';
  const microCardQuery = `https://cards.microlink.io/?preset=ajames&title=${seo.title}&subtitle=${seo.subtitle}&bg.image=${image}`;
  const microCardUrl = `${microLinkApi}${encodeURIComponent(microCardQuery)}`;

  return (
    <Helmet title={seo.title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="en" amp />

      <link rel="canonical" href={seo.url} />

      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={microCardUrl} />
      <meta itemProp="image" content={microCardUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:site" content={site.siteMetadata.twitter} />
      <meta name="twitter:creator" content={site.siteMetadata.twitter} />
      <meta name="twitter:image" content={microCardUrl} />
      <meta name="twitter:image:alt" content={seo.imgAlt} />

      <meta property="og:type" content={seo.content} />
      <meta property="og:image" content={microCardUrl} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content={seo.siteName} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  canonical: PropTypes.string,
  article: PropTypes.bool,
};

export default SEO;
