/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register({files: true})
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    FAST_REFRESH: true,
  },
  /* Your site config here */
  siteMetadata: {
    title: 'ALI DEV',
    author: 'Ali Amouri Kadhim',
    description: ` I am a full-stack web developer. I can provide
    clean code and pixel perfect design. I also make website more
     & more interactive with web animations.`,
    siteUrl: 'https://ali-dev.com/',
    defaultImage: '/images/pinterest_profile.png',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_TRACKING_ID,
        anonymize: true,
        head: true,
      },
    },
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-less`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/theme.ts`).lightTheme,
        dark: require(`${__dirname}/src/theme.ts`).darkTheme,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog post website`,
        short_name: `Blog post`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/global/layout.tsx`,
      },
    },
    {
      resolve: 'gatsby-plugin-generate-typings',
      options: {
        dest: './src/generated/graphql-types.d.ts',
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
           siteMetadata{
             siteUrl
           }
         }
         allSitePage {
           nodes {
             path
           }
         }
       }`,
        resolveSiteUrl: ({site}) => {
          return site.siteMetadata.siteUrl
        },
        serialize: ({site, allSitePage}) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{userAgent: '*', allow: '/'}],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg-icons/,
        },
      },
    },
  ],
}
