/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

// require('dotenv').config();
// const withCSS = require('@zeit/next-css');
// const { createApolloFetch } = require('apollo-fetch');

// const apolloFetch = createApolloFetch({ uri: 'http://localhost:1337/graphql' });

const artworks = require('./data');

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: 'react-svg-loader',
      },
      {
        test: /\.md$/,
        use: 'frontmatter-markdown-loader',
      },
    );
    return config;
  },
  exportPathMap: async () => {
    //   // Get list of pages from API and map them to 'real' pages/templates
    //   const artworkPages = artworks.reduce(
    //     (pages, { url, id }) =>
    //       Object.assign({}, pages, {
    //         [url]: {
    //           page: '/artwork',
    //           query: { id },
    //         },
    //       }),
    //     {},
    //   );

    // Combine the page maps and any static pages
    const exportPages = {
      // ...artworkPages,
      // '/': { page: '/' },
      '/': { page: '/home' },
    };

    return exportPages;
  },
};
