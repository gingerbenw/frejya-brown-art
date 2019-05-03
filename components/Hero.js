import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import AsyncLoadBackground from './AsyncLoadBackground';

const Hero = ({ background, title }) => (
  <HeroWrapper src={background}>
    <Contents>
      <h1>{title}</h1>
    </Contents>
  </HeroWrapper>
);

export default Hero;

Hero.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const HeroWrapper = styled(AsyncLoadBackground)`
  height: 100vh;
  width: 100%;

  background: linear-gradient(30deg, rgba(0, 0, 0, 0.9), rgba(50, 50, 50, 0.5));

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  padding: 2rem 3rem;
  background: rgba(255, 255, 255, 0.3);
  max-width: 85%;
  box-sizing: border-box;

  h1 {
    color: white;
    text-transform: uppercase;

    font-size: 2.5rem;
    max-width: 20rem;
    letter-spacing: 0.75rem;

    line-height: 3rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
      line-height: 2.6rem;
      letter-spacing: 0.25rem;
    }
  }
`;
