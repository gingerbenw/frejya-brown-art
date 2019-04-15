import React, { useState } from 'react';
// import Link from 'next/link';
import styled from 'styled-components';
import MenuToggle from 'components/MenuToggle';

const SideNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <MenuToggle active={showMenu} onClick={() => setShowMenu(!showMenu)} />
      <Backdrop active={showMenu} onClick={() => setShowMenu(!showMenu)} />
      <SideBar show={showMenu}>
        <p>Stuffs</p>
      </SideBar>
    </>
  );
};

export default SideNav;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: ${({ active }) => (active ? ' 100vh' : '0')};
  z-index: 5;
  top: 0;
  right: 0;

  transition: height 0.5s ease-in-out;

  background: rgba(255, 255, 255, 0.8);
`;

const SideBar = styled.div`
  position: fixed;
  width: 30rem;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  background: linear-gradient(
    30deg,
    rgba(0, 0, 0, 0.95),
    rgba(10, 10, 10, 0.95)
  );

  z-index: 10;

  transition: right 0.5s ease-in-out;
  right: ${({ show }) => (show ? '0' : '-30rem')};
`;
