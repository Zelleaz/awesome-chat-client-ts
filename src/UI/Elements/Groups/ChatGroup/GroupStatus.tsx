import styled from "styled-components";
import {CoordsCSS, UserStatuses} from "../../../../types";

interface GroupStatusProps extends CoordsCSS{ status: UserStatuses }

export const GroupStatus = styled.div<GroupStatusProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: ${props => props.theme.statuses[props.status]};
  position: absolute;
  top: ${props => props.top ?? ''}px;
  right: ${props => props.right ?? ''}px;
  left: ${props => props.left ?? ''}px;
  bottom: ${props => props.bottom ?? ''}px;
`