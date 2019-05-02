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
    const exportPages = {
      //   @TODO: Get list of pages from API and map them to 'real' pages/templates
      '/': { page: '/home' },
      '/art/jon-snow': {
        page: '/art',
        query: {
          slug: '2019-05-02-jon-snow',
        },
      },
    };

    return exportPages;
  },
};
