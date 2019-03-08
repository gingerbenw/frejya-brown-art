import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => (
  <FixedHeader>
    <ul>
      <Link href="/">
        <NavItem>Home</NavItem>
      </Link>
      <Link href="#about">
        <NavItem>About</NavItem>
      </Link>
      <Link href="#gallery">
        <NavItem>Gallery</NavItem>
      </Link>
    </ul>
  </FixedHeader>
);

export default Header;

const FixedHeader = styled.header`
  position: absolute;
  z-index: 1;
`;

const NavItem = styled.span`
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;
