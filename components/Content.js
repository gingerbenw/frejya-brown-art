import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Content = ({ src }) => <Wrapper dangerouslySetInnerHTML={{ __html: src }} />;

export default Content;

Content.propTypes = {
  src: PropTypes.string,
};

const Wrapper = styled.div`
  /* background: white; */
`;
