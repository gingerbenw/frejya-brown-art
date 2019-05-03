import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';

// Components
import Hero from '../components/Hero';
// import About from '../components/About';
// import Content from '../components/Content';
// import Masonry from '../components/Masonry';
import ImageGallery from '../containers/ImageGallery';

// Markdown
import content from '../content/home.md';

/* eslint-disable no-unused-vars */

const Home = ({ artworks, categories }) => {
  const featuredArtworks = artworks.filter(
    (page) => page.status === 'Featured',
  );
  const [activeArtwork, setActiveArtwork] = useState(featuredArtworks[0]);

  const {
    html,
    attributes: { title },
  } = content;
  return (
    <main>
      <Hero title={title} background={activeArtwork.featuredImage} />
      {/* <About>
        <Content src={html} />
      </About> */}
      <ImageGallery artworks={artworks} categories={categories} />
    </main>
  );
};

export default Home;

Home.propTypes = {
  artworks: PropTypes.array,
  categories: PropTypes.array,
};
