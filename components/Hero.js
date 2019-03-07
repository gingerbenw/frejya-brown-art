import React from 'react';
import styled from 'styled-components';
import AsyncLoadBackground from 'components/AsyncLoadBackground';

const Background = '/static/images/abstract-swirl.jpg';

const Hero = () => (
  <HeroWrapper src={Background}>
    <Contents>
      <h1>Freya Brown Art</h1>
    </Contents>
  </HeroWrapper>
);

export default Hero;

const HeroWrapper = styled(AsyncLoadBackground)`
  height: 100vh;
  width: 100%;

  background: rgba(50, 50, 50, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  border: 2px solid white;
  padding: 2rem;

  h1 {
    color: white;
  }
`;
