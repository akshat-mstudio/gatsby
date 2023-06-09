/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN || "3e653a9b21cb2015c731354973331960c111b5f93dfb8efe2a3db3907688a97c44eb59a8750da8517e381425d4cfcf0525550523c58fdda30839e9515de783c8bab395aa3bb03ec9b36be5cd07e834b76699323d7adaa20e4882061095e01ca6ab7817c220e457d35a10319f262a70351776998cb2acdf29652db49a4ed591a6",
        collectionTypes: ['listing', 'user'],
        singleTypes: [],
        remoteFileHeaders: {
          /**
           * Customized request headers
           * For http request with a image or other files need authorization
           * For expamle: Fetch a CDN file which has a security config when gatsby building needs
           */
          Referer: "http://localhost:8000",
          // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
        },
      },
    },
  ]
};