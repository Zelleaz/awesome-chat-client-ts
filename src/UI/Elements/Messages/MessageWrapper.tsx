import styled from "styled-components";

interface MessageWrapperProps { isByUser: boolean }

export const MessageWrapper = styled.div<MessageWrapperProps>`
  margin-top: 45px;
  display: flex;
  justify-content: ${props => props.isByUser ? 'flex-end' : 'flex-start'};
  position: relative;
`