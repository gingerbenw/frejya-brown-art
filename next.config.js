const data = require('./data.json');

/* eslint-disable prefer-template */
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
    const artworks = data.artworks.reduce(
      (files, { name }) => Object.assign({}, files, {
          ['/work/' + name]: {
            page: '/artwork',
            query: { file: name + '.md' },
          },
        }),
      {},
    );

    const exportPages = {
      '/': { page: '/' },
      ...artworks,
    };

    return exportPages;
  },
};
