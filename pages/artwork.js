import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdAdd, MdShoppingCart } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';

// Components
import AsyncLoadBackground from '../components/AsyncLoadBackground';
import Content from '../components/Content';

// Icons
// import Plus from '../static/images/icons/plus.svg';
import Close from '../static/images/icons/close.svg';

// const PrevCursor = '/static/images/icons/plus.svg';
// const NextCursor = '/static/images/icons/next.svg';

const Artwork = ({ content, artworks }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const toggleInfo = () => setShowMoreInfo(!showMoreInfo);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  // Page content
  const {
    html,
    attributes: { title, featuredImage },
  } = content;

  // Pagination
  const activeIndex = artworks.findIndex((art) => art.title === title);
  const prevIndex = activeIndex !== 0 ? activeIndex - 1 : artworks.length - 1;
  const nextIndex = activeIndex !== artworks.length - 1 ? activeIndex + 1 : 0;
  const prevUrl = `/work/${artworks[prevIndex].name}`;
  const nextUrl = `/work/${artworks[nextIndex].name}`;

  return (
    <Wrapper>
      <Backdrop src={featuredImage} zoom={showMoreInfo} />

      {loaded && (
        <InfoPanel>
          <Controls onClick={toggleInfo}>
            <MdAdd />
          </Controls>
          <TitlePanel>{title}</TitlePanel>
          <Link href={prevUrl}>
            <a>
              <Controls>
                <MdKeyboardArrowLeft />
              </Controls>
            </a>
          </Link>
          <Link href={nextUrl}>
            <a>
              <Controls>
                <MdKeyboardArrowRight />
              </Controls>
            </a>
          </Link>
          {/* <PaginationLeft onClick={pageDown} />
        <PaginationRight onClick={pageUp} /> */}
        </InfoPanel>
      )}

      <MoreInfo show={showMoreInfo}>
        <Close onClick={toggleInfo} />
        {/* <Image src={featuredImage} alt={title} /> */}
        <Details>
          <Title>{title}</Title>
          <hr />
          <Content src={html} />
          <Actions>
            <MdShoppingCart />
            <span>
              Share:
              {' '}
              <FaFacebook />
            </span>
          </Actions>
        </Details>
      </MoreInfo>
    </Wrapper>
  );
};

export default Artwork;

Artwork.propTypes = {
  content: PropTypes.object,
  artworks: PropTypes.array,
};

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
Artwork.getInitialProps = ({ query: { file } }) => {
  const content = require(`../content/artworks/${file}`);
  return { content };
};

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

const Wrapper = styled.main`
  position: fixed;
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
  right: 1rem;
  z-index: 2;
  display: flex;
  justify-content: space-between;

  a {
    color: inherit;
  }
`;
/*
const Image = styled.img`
  max-height: 100vh;
  max-width: 40%;
  margin: 0 2rem;

  pointer-events: none;
`; */

const Details = styled.div`
  padding: 2rem;
  padding-left: 0;
  max-width: 900px;
`;

const Controls = styled.div`
  background: #eee;
  padding: 0.5rem;
  border: none;
  color: #888;
  display: flex;
  align-items: center;

  transition: background 0.2s, color 0.2s;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  &:hover {
    cursor: pointer;
    background: #fff;
    color: #333;

    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  ${animations}
  animation: fillIn 1s;
`;

const TitlePanel = styled(Controls)`
  padding: 0.5rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;

  margin-right: auto;
`;

const MoreInfo = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  color: white;
  background: rgba(0, 0, 0, 0.9);
  line-height: 2rem;

  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};

  transition: transform 1s, opacity 1s;
  transform: scale(${({ show }) => (show ? '1' : '1.1')});

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
  transform: scale(${({ zoom }) => (zoom ? '1.2' : '1')});
`;

const Title = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.5rem;
`;

const Actions = styled.div`
  svg {
    position: relative;
  }
`;
