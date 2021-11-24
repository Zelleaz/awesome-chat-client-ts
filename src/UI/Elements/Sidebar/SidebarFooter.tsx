import styled from "styled-components";

export const SidebarFooter = styled.div`
  padding: 0 33px;
  flex-basis: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${props => props.theme.primary};
`