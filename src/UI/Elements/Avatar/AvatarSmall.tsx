import styled from "styled-components";
import {UserStatuses} from "../../../types";

interface AvatarSmallProps {
    status: UserStatuses
}

export const AvatarSmall = styled.img<AvatarSmallProps>`
  margin-right: 15px;
  width: 44px;
  height: 44px;
  object-fit: cover;
  border: 3px solid ${props => props.theme.statuses[props.status]};
  border-radius: 50%;
`