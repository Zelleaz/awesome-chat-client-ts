import styled from "styled-components";

interface GroupLastSentTimeProps { isActive: boolean }

export const GroupLastSentTime = styled.div<GroupLastSentTimeProps>`
  color: ${props => props.isActive ? props.theme.primaryMessageText : props.theme.secondaryText};
  font-size: 10px;
  position: absolute;
  top: 22px;
  right: 15px;
`