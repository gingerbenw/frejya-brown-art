const path = require('path');
const fs = require('fs');

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
    const directoryPath = path.join(__dirname, 'content/artworks');

    const artwork = await new Promise((resolve, reject) => {
      fs.readdir(directoryPath, (err, data) => {
        const files = data.reduce(
          (artworks, file) => Object.assign({}, artworks, {
              ['/art/' + file.split('.md')[0]]: {
                page: '/artwork',
                query: { file },
              },
            }),
          {},
        );
        if (err) reject(err);
        else resolve(files);
      });
    });

    const exportPages = {
      '/': { page: '/' },
      ...artwork,
    };

    return exportPages;
  },
};
