import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => (
  <FixedHeader>
    <NavMenu>
      <Link href="/">
        <NavItem>Home</NavItem>
      </Link>
      <Link href="#about">
        <NavItem>About</NavItem>
      </Link>
      <Link href="#gallery">
        <NavItem>Gallery</NavItem>
      </Link>
    </NavMenu>
  </FixedHeader>
);

export default Header;

const FixedHeader = styled.header`
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 0.5rem;
`;

const NavItem = styled.span`
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0.125rem;
  margin: 0.5rem 1rem;
  transition: border-color 0.5s ease-in-out;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`;
