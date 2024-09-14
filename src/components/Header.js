import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 3px dashed #ff6b6b;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  color: #ff6b6b;
  margin: 0;
  transform: rotate(-5deg);
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #ff6b6b;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>Dine 'n' Doc</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/next-event">Next Event</NavLink>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;