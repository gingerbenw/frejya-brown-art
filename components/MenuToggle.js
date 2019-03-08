import React from 'react';
import styled, { css } from 'styled-components';

const MenuToggle = ({ active, onClick }) => (
  <Hamburger class="hamburger" type="button" onClick={onClick}>
    <Box class="hamburger-box">
      <Inner class="hamburger-inner" active={active} />
    </Box>
  </Hamburger>
);

export default MenuToggle;

const Hamburger = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 20;

  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  /* overflow: visible; */

  overflow: hidden;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const Box = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const Inner = styled.span`
  display: block;
  top: 50%;
  margin-top: -2px;
  width: 40px;
  height: 4px;
  background-color: #fff;
  /* border-radius: 4px; */
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
  transition: background-color 0.125s 0.175s ease-in;

  ${({ active }) =>
    active &&
    css`
      transition-delay: 0s;
      transition-timing-function: ease-out;
      background-color: transparent !important;
    `}

  &::before,
  &::after {
    width: 40px;
    height: 4px;
    background-color: #fff;
    /* border-radius: 4px; */
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    content: '';
    display: block;
  }

  &::before {
    top: -10px;
    left: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
      top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;

    ${({ active }) =>
      active &&
      css`
        left: -80px;
        top: -80px;
        transform: translate3d(80px, 80px, 0) rotate(45deg);
        transition: left 0.125s ease-out, top 0.05s 0.125s linear,
          transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
      `}
  }
  &::after {
    bottom: -10px;
    top: 10px;
    right: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
      top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;

    ${({ active }) =>
      active &&
      css`
        right: -80px;
        top: -80px;
        transform: translate3d(-80px, 80px, 0) rotate(-45deg);
        transition: right 0.125s ease-out, top 0.05s 0.125s linear,
          transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
      `}
  }
`;
