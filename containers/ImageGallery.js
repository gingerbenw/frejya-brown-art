/* eslint-disable max-len */

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Gallery from '../components/Gallery';

const ImageGallery = ({ artworks, categories }) => {
  const [categoryFilter, setCategoryFilter] = useState(null);

  // Filter images
  const filteredArtworks = categoryFilter
    ? artworks.filter((artwork) => artwork.categories.some(({ category }) => category === categoryFilter),
      )
    : artworks;

  return (
    <Wrapper>
      <Filters>
        <Category active={categoryFilter === null} onClick={() => setCategoryFilter(null)}>
          All
        </Category>
        {categories.map(({ title }) => (
          <Category
            key={title}
            active={categoryFilter === title}
            onClick={() => setCategoryFilter(title)}
          >
            {title}
          </Category>
        ))}
      </Filters>
      <Gallery artworks={filteredArtworks} />
    </Wrapper>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  artworks: PropTypes.array,
  categories: PropTypes.array,
};

const Wrapper = styled.div`
  text-align: center;
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3rem 1.5rem;
`;

const Category = styled.button`
  background: ${({ active }) => (active ? '#8a8a8a' : '#4d4d4d')};
  color: white;
  border: none;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;

  &:hover {
    background: #5e5e5e;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
