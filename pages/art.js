import React from 'react';
import { withRouter } from 'next/router';

import Content from 'components/Content';

const Artwork = ({ content }) => {
  const {
    html,
    attributes: { title, featuredImage, date, excerpt, meta },
  } = content;
  return (
    <div>
      <h1>{title}</h1>
      <Content src={html} />
      <img src={featuredImage} />
    </div>
  );
};

export default Artwork;

Artwork.getInitialProps = ({ query: { slug } }) => {
  const content = require(`../content/artworks/${slug}.md`);
  return { content };
};
