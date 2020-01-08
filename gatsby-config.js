module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rubik\:300`, `Roboto`],
        display: "swap"
      }
    }
  ]
};
