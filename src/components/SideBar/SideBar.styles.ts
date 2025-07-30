import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.nav`
  min-width: calc((100vh / 8) * 0.94);
  height: 100vh;
  z-index: 100;
  background-color: #f8f8f8;
`;

export const NavList = styled.ul`
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.li`
  aspect-ratio: 0.94;
  width: 100%;
  flex: 1;
  min-height: 0;
  position: relative;

  &::after {
    z-index: 99;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #00834e;
    transform-origin: right;
  }
`;

export const NavIcon = styled.img`
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 0.94;
`;

export const NavButton = styled(NavLink)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  -webkit-tap-highlight-color: transparent;

  &.active {
    background-color: #e0e0e0;
  }
`;
