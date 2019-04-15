import React from 'react';
import styled from 'styled-components';

class AsyncLoadBackground extends React.PureComponent {
  state = { loaded: false };

  componentDidMount() {
    const img = new Image();
    img.onload = () => this.setState({ loaded: true });
    img.src = this.props.src;
  }

  render() {
    const { children, src, fixed } = this.props;
    const { loaded } = this.state;
    return (
      <Wrapper {...this.props}>
        <Background src={src} loaded={loaded} fixed={fixed} />
        {children}
      </Wrapper>
    );
  }
}

export default AsyncLoadBackground;

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
