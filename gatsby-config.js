const config = {
  siteMetadata: {
    title: `Andrew James`,
    description: `My personal website`,
    author: {
      name: `Andrew James`,
      email: `contact@ajames.dev`,
      location: `London, UK`,
      summary: `Frontend engineer living and working in London.`,
    },
    siteUrl: `https://ajames.dev`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-axe`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Andrew James',
        short_name: 'Andrew James',
        start_url: '/',
        background_color: '#fcfcfc',
        theme_color: '#5f9ea0',
        display: 'standalone',
        icon: 'src/assets/images/logo.png',
        crossOrigin: `use-credentials`,
      },
    },
  ],
};

// Prevents GA analytics tracking staging.ajames.dev
// Sauce: https://www.chaseadams.io/posts/netlify-gatsby-analytics/
if (process.env.CONTEXT === 'production') {
  const gaConfig = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-158626991-1',
      anonymize: true,
      respectDNT: true,
    },
  };

  config.plugins.push(gaConfig);
}

module.exports = config;
