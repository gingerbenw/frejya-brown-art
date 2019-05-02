import React from 'react';
import PropTypes from 'prop-types';
import Content from '../components/Content';

const Artwork = ({ content }) => {
  const {
    html,
    attributes: { title, featuredImage },
  } = content;
  return (
    <div>
      <h1>{title}</h1>
      <Content src={html} />
      <img src={featuredImage} alt={title} />
    </div>
  );
};

export default Artwork;

Artwork.propTypes = {
  content: PropTypes.object,
};

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
Artwork.getInitialProps = ({ query: { file } }) => {
  const content = require(`../content/artworks/${file}`);
  return { content };
};
