import React, { useState } from 'react';
// import Link from 'next/link';
import styled from 'styled-components';
import MenuToggle from 'components/MenuToggle';

const SideNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <MenuToggle active={showMenu} onClick={() => setShowMenu(!showMenu)} />
      <SideBar show={showMenu}>
        <p>Stuffs</p>
      </SideBar>
    </>
  );
};

export default SideNav;

const SideBar = styled.div`
  position: fixed;
  width: 30rem;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;

  transition: right 0.5s ease-in-out;
  right: ${({ show }) => (show ? '0' : '-30rem')};
`;
