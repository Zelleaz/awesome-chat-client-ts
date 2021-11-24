import styled from "styled-components";
import {CoordsCSS, UserStatuses} from "../../../types";

interface StatusCircleSmallProps extends CoordsCSS{
    status: UserStatuses
}

export const StatusCircleSmall = styled.div<StatusCircleSmallProps>`
  position: absolute;
  top: ${props => props?.top}px;
  left: ${props => props?.left}px;
  right: ${props => props?.right}px;
  bottom: ${props => props?.bottom}px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.theme.statuses[props.status]};
  z-index: 999;
`