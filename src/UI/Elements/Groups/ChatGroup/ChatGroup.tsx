import styled from "styled-components";

interface ChatGroupProps {
    isActive: boolean
}

export const ChatGroup = styled.div<ChatGroupProps>`
  width: 100%;
  background-color: ${props => props.isActive ? props.theme.primary : 'none'};
  position: relative;
  border-radius: 14px;
  margin-bottom: 20px;
  transition: all ease 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: ${props => props.isActive ? props.theme.shadow : ''};
  &:hover {
    background-color: ${props => !props.isActive ? props.theme.chatHoverBg : ''};
  }
  &:last-child {
    margin-bottom: 0;
  }
`