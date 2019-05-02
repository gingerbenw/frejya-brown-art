import React from 'react';
import styled from 'styled-components';

const Content = ({ src }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: src }} />
);

export default Content;

const Wrapper = styled.div``;
