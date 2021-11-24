import styled from "styled-components";

interface GroupMessageProps { isActive: boolean }

export const GroupMessage = styled.div<GroupMessageProps>`
  font-weight: 300;
  font-size: 10px;
  max-width: 173px;
  overflow: hidden;
  max-height: 16px;
  color: ${props => props.isActive ? props.theme.primaryMessageText : props.theme.secondaryText};
`