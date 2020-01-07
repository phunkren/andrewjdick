module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Slab`,
            variants: [`400`]
          },
          {
            family: `Lato`,
            variants: [`400`]
          }
        ]
      }
    }
  ]
};
