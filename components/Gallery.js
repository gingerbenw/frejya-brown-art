import React from 'react';
import Link from 'next/link';
import AsyncLoadBackground from 'components/AsyncLoadBackground';
import styled from 'styled-components';

// Images
const image1 = '/static/images/artwork/001.jpg';
const image2 = '/static/images/artwork/002.jpg';
const image3 = '/static/images/artwork/003.jpg';
const image4 = '/static/images/artwork/004.jpg';
const image5 = '/static/images/artwork/005.jpg';

const images = [
  { title: 'BRAHMĀ', src: image1, url: '/artwork/image1' },
  { title: 'Jon snow', src: image2, url: '/artwork/image1' },
  { title: 'Flying fish', src: image3, url: '/artwork/image1' },
  { title: 'Unicorn', src: image4, url: '/artwork/image1' },
  { title: 'Multiverse', src: image5, url: '/artwork/image1' },
];

const Gallery = () => (
  <Container id="gallery">
    {images.map(({ title, src, url }) => (
      <Link href={url}>
        <Item src={src}>
          <span>{title}</span>
          <hr />
        </Item>
      </Link>
    ))}
  </Container>
);

export default Gallery;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0.5rem;

  max-width: 1200px;
  margin: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;

  /* Small devices */
  @media (max-width: 768px) {
    grid-gap: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Item = styled(AsyncLoadBackground)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-column: span 4;
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

    transition: opacity 0.5s ease-in-out, font-size 0.5s ease-in-out,
      padding 0.5s ease-in-out;
  }

  hr {
    width: 4rem;
    opacity: 0;
    border: none;
    border-bottom: 1px solid #999;
    transition: opacity 0.5s ease-in-out, width 0.5s ease-in-out,
      margin 0.5s ease-in-out;
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

  /* Small devices */
  @media (max-width: 768px) {
    grid-column: span 6;
  }
`;
