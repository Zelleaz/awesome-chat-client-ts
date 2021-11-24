import styled from "styled-components";

interface MessageTitleProps { isByUser: boolean }

export const MessageTitle = styled.div<MessageTitleProps>`
  position: absolute;
  top: -32px;
  right: ${props => props.isByUser ? 0 : ''}px;
  left: ${props => !props.isByUser ? 0 : ''}px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.primaryText};
`