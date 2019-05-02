import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// Components
import Hero from '../components/Hero';
import Content from '../components/Content';

// Markdown
import content from '../content/home.md';

/* eslint-disable no-unused-vars */

const Home = ({ artworks }) => {
  const featuredArtworks = artworks.filter((page) => page.status === 'Featured');
  const [activeArtwork, setActiveArtwork] = useState(featuredArtworks[0]);

  const {
    html,
    attributes: { title },
  } = content;
  return (
    <article>
      <Hero title={title} background={activeArtwork.featuredImage} />
      <Content src={html} />
      <ul>
        {artworks.map((artwork, k) => (
          <li key={k}>
            <Link href={`/art/${artwork.name}`}>
              <a>
                <h2>{artwork.title}</h2>
              </a>
            </Link>
            <img src={artwork.featuredImage} alt={artwork.title} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Home;

Home.propTypes = {
  artworks: PropTypes.array,
};
