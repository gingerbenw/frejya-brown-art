import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AsyncLoadBackground = (props) => {
  const { children, src, fixed } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = src;
  }, [src]);

  return (
    <Wrapper {...props}>
      <Background src={src} loaded={loaded} fixed={fixed} />
      {children}
    </Wrapper>
  );
};

export default AsyncLoadBackground;

AsyncLoadBackground.propTypes = {
  children: PropTypes.node,
  src: PropTypes.node.isRequired,
  fixed: PropTypes.bool,
};

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  transition: opacity 1s;
  opacity: ${({ loaded }) => (loaded ? '1' : '0')};

  /* background-attachment: ${({ fixed }) => (fixed ? 'fixed' : 'scroll')}; */

  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;
