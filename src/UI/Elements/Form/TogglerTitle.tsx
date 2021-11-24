import styled from "styled-components";

interface TogglerTitleProps { isActive: boolean }

export const TogglerTitle = styled.div<TogglerTitleProps>`
  padding: 10px 15px;
  width: 50%;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  font-weight: ${props => !props.isActive ? 400 : 600};
  font-size: 16px;
  background-color: ${props => props.isActive ? props.theme.primary : ''};
  color: ${props => props.isActive ? props.theme.primaryMessageText : props.theme.primaryText};
`