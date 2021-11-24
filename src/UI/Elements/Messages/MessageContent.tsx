import styled from "styled-components";

interface MessageContentProps { isByUser: boolean }

export const MessageContent = styled.div<MessageContentProps>`
  padding: 16px 20px;
  font-size: 14px;
  background-color: ${props => props.isByUser ? props.theme.primaryMessageBg : props.theme.secondaryBg};
  color: ${props => props.theme.primaryText};
  margin-right: ${props => props.isByUser ? '10px' : ''};
  margin-left: ${props => !props.isByUser ? '10px' : ''};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: ${props => props.isByUser ? '15px' : ''};
  border-top-right-radius: ${props => !props.isByUser ? '15px' : ''};
  display: flex;
  flex-direction: column;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`