import Gallery from 'components/Gallery';
import React, { useState } from 'react';
import styled from 'styled-components';

const categories = [
  'Art print',
  'Photorealism',
  'Universe series',
  'Animal study',
];

const ImageGallery = ({ artworks }) => {
  const [categoryFilter, setCategoryFilter] = useState(null);

  // Filter images
  const filteredImages = categoryFilter
    ? artworks.filter(({ tags }) => tags.indexOf(categoryFilter) !== -1)
    : artworks;

  return (
    <Wrapper>
      <Filters>
        <Category
          active={categoryFilter === null}
          onClick={() => setCategoryFilter(null)}
        >
          All
        </Category>
        {categories.map((category) => (
          <Category
            active={categoryFilter === category}
            onClick={() => setCategoryFilter(category)}
          >
            {category}
          </Category>
        ))}
      </Filters>
      <Gallery images={filteredImages} />
    </Wrapper>
  );
};

export default ImageGallery;

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
