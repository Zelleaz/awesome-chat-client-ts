import styled from "styled-components";

export const GroupNotifier = styled.div`
  background-color: ${props => props.theme.newMessageBg};
  padding: 0 9px;
  color: ${props => props.theme.newMessageColor};
  position: absolute;
  border-radius: 14px;
  font-size: 12px;
  font-weight: 600;
  right: 15px;
  bottom: 18px;
`