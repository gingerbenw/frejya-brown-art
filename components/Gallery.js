import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import AsyncLoadBackground from './AsyncLoadBackground';

const Gallery = ({ artworks }) => (
  <Container>
    {artworks.map(({ title, featuredImage, name }) => (
      <Link prefetch key={name} href={`/work/${name}`}>
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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
`;

const Item = styled(AsyncLoadBackground)`
  width: calc(100% / 3);
  height: 33vw;

  /* mobile */
  @media (max-width: 900px) {
    width: 50vw;
    height: 50vw;
  }

  /* tablet */
  @media (max-width: 400px) {
    width: 100vw;
    height: 60vw;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
