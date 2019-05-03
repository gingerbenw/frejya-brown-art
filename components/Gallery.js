import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import AsyncLoadBackground from './AsyncLoadBackground';

const Gallery = ({ artworks }) => (
  <Container id="gallery">
    {artworks.map(({ title, featuredImage, name }) => (
      <Link key={name} href={`/work/${name}`}>
        <Item withScrollEffect src={featuredImage}>
          <span>{title}</span>
          <hr />
        </Item>
      </Link>
    ))}
  </Container>
);

export default Gallery;

Gallery.propTypes = {
  artworks: PropTypes.array.isRequired,
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;

  max-width: 1200px;
  margin: auto;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled(AsyncLoadBackground)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 16rem;
  letter-spacing: 0.25rem;
  color: #444;
  text-transform: uppercase;
  transition: background-color 0.5s ease-in-out;

  cursor: pointer;

  span {
    padding-top: 0.5rem;
    font-size: 0.9rem;
    opacity: 0;

    transition: opacity 0.5s ease-in-out, font-size 0.5s ease-in-out, padding 0.5s ease-in-out;
  }

  hr {
    width: 4rem;
    opacity: 0;
    border: none;
    border-bottom: 1px solid #999;
    transition: opacity 0.5s ease-in-out, width 0.5s ease-in-out, margin 0.5s ease-in-out;
  }

  /* Hover */
  &:hover {
    background-color: rgba(255, 255, 255, 0.95);

    span {
      padding-top: 0;
      font-size: 1rem;
      opacity: 0.9;
    }

    hr {
      width: 8rem;
      opacity: 0.9;
      margin-top: 1rem;
    }
  }
`;
