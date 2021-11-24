import styled from "styled-components";

interface MessageBodyProps { isByUser: boolean }

export const MessageBody = styled.div<MessageBodyProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: ${props => props.isByUser ? 'row' : 'row-reverse'};
  max-width: 450px;
  word-wrap: break-word;
`
 