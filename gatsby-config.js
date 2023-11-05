/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `vi-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ['gatsby-plugin-styled-components',"gatsby-plugin-postcss",
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Handlee`,
          file: `https://fonts.googleapis.com/css2?family=Handlee&display=swap`,
        },
        {
        name: `Poppins`,
        file :`https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap`,
        }
      ],
    },
  },
  'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
]
};
