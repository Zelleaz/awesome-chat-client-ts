import styled from "styled-components";

interface SidebarLinkProps { isActive: boolean }

export const SidebarLink = styled.div<SidebarLinkProps>`
  cursor: pointer;
  height: 100%;
  width: 48px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    display: ${props => props.isActive ? 'block' : 'none'};
    content: '';
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: ${props => props.theme.primary};
  }
  span svg {
    width: 25px;
    height: 25px;
    path {
      fill: ${props => props.isActive ? props.theme.primary : props.theme.primaryTransparent}
    }
  }
`