import styled from "styled-components";

interface GroupTitleProps { isActive: boolean }

export const GroupTitle = styled.h3<GroupTitleProps>`
  margin: 0;
  font-weight: 600;
  font-size: 12px;
  color: ${props => props.isActive ? props.theme.primaryMessageText : props.theme.primaryText};
`