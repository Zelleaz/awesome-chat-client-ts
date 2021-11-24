import styled from "styled-components";

export const SidebarBody = styled.div`
  background-color: ${props => props.theme.secondaryBg};
  flex-basis: 100%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  transition: all ease 0.3s;
`