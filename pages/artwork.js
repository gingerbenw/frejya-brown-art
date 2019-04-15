import React, { useState } from 'react';
import ImageGallery from 'containers/ImageGallery';
import Header from 'components/Header';
import About from 'components/About';
import SideNav from 'components/SideNav';
import Hero from 'components/Hero';
import artworks from 'data';
import styled, { css } from 'styled-components';
import AsyncLoadBackground from 'components/AsyncLoadBackground';
import Markdown from 'react-markdown';
import Router from 'next/router';
import Plus from '../static/images/icons/plus.svg';
import Close from '../static/images/icons/close.svg';

const PrevCursor = '/static/images/icons/plus.svg';
const NextCursor = '/static/images/icons/next.svg';

const Artwork = ({ page }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const toggleInfo = () => setShowMoreInfo(!showMoreInfo);

  // Pagination
  const activeIndex = artworks.findIndex((art) => art.id === page.id);

  const pageUp = () => {
    const nextItem =
      artworks.length - 1 === activeIndex
        ? artworks[0]
        : artworks[activeIndex + 1];
    Router.push(nextItem.url);
  };

  const pageDown = () => {
    const prevItem =
      activeIndex === 0
        ? artworks[artworks.length - 1]
        : artworks[activeIndex - 1];
    Router.push(prevItem.url);
  };

  const { id, src, title, description } = page;
  return (
    <Wrapper>
      <Backdrop src={src} zoom={showMoreInfo} />
      {showMoreInfo ? (
        <MoreInfo>
          <Close onClick={toggleInfo} />
          <Image src={src} alt={title} />
          <Details>
            <Title>{title}</Title>
            <Markdown source={description} />
          </Details>
        </MoreInfo>
      ) : (
        <InfoPanel>
          <Controls onClick={toggleInfo}>
            <Plus />
          </Controls>
          <TitlePanel>{title}</TitlePanel>
        </InfoPanel>
      )}
      <PaginationLeft onClick={pageDown} />
      <PaginationRight onClick={pageUp} />
    </Wrapper>
  );
};

export default Artwork;

Artwork.getInitialProps = ({ query: { id } }) => {
  const page = artworks.find((artwork) => artwork.id === id);

  return { page };
};

const Wrapper = styled.main`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

const InfoPanel = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 2;
  display: flex;
`;

const Image = styled.img`
  max-height: 100vh;
  max-width: 40%;
  margin: 0 2rem;

  pointer-events: none;
`;

const Details = styled.div`
  padding: 2rem;
  padding-left: 0;
  max-width: 900px;
`;

const Controls = styled.div`
  background: #eee;
  padding: 0.5rem;
  border: none;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  &:hover {
    cursor: pointer;
    background: #ddd;
  }

  ${animations}
  animation: fillIn 1s;
`;

const TitlePanel = styled.div`
  background: #eee;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;

  display: flex;
  align-items: center;

  ${animations}
  animation: fillIn 1s;
`;

const MoreInfo = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  color: white;
  background: rgba(0, 0, 0, 0.9);
  line-height: 2rem;

  animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  svg {
    position: absolute;
    display: block;
    right: 2rem;
    top: 2rem;
    height: 2.5rem;
    width: 2.5rem;
    fill: white;

    opacity: 0.75;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

const Backdrop = styled(AsyncLoadBackground)`
  height: 100vh;
  width: 100%;

  transition: transform 1s;
  transform: scale(${({ zoom }) => zoom ? '1.2' : '1'});
`;

const Title = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.5rem;
`;

const PaginationLeft = styled.div`
  position: absolute;
  height: 100vh;
  width: 50%;
  top: 0;
  left: 0;
  /* cursor: url(${PrevCursor}), pointer; */

  &:hover {
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2)
    );
  }
`;

const PaginationRight = styled.div`
  position: absolute;
  height: 100vh;
  width: 50%;
  top: 0;
  right: 0;
  /* cursor: url(${NextCursor}), pointer; */

  &:hover {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2)
    );
  }
`;

const animations = css`
  @keyframes fillIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
