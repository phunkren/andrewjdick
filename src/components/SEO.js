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
    siteName: `${site.siteMetadata.author.name} | ${site.siteMetadata.description}`,
    url: canonical || site.siteMetadata.url,
    content: article ? 'article' : 'website',
    imgAlt: imageAlt || '',
  };

  const microCardStyles = {
    mask: encodeURI(
      'linear-gradient(75deg,rgba(0,0,0,0.75)0%,rgba(0,0,0,0.5)75%,rgba(0,0,0,0.25)100%)',
    ),
    primary: encodeURI(
      'linear-gradient(75deg,rgb(255,255,255)0%,rgba(255,255,255,0.95)70%,rgba(255,255,255,0)0%)',
    ),
    secondary: encodeURI('rgb(0,0,0)'),
  };

  const microLinkApi = 'https://i.microlink.io/';
  const microCardQuery = `https://cards.microlink.io/?preset=ajames&title=${seo.title}&subtitle=${seo.description}&bg.mask=${microCardStyles.mask}&bg.primary=${microCardStyles.primary}&bg.secondary=${microCardStyles.secondary}&bg.image=${image}`;
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
  canonical: PropTypes.string,
  article: PropTypes.bool,
};

export default SEO;
