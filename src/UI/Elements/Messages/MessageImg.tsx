import styled from "styled-components";
import {UserStatuses} from "../../../types";

interface MessageImgProps { status: UserStatuses }

export const MessageImg = styled.img<MessageImgProps>`
  width: 46px;
  height: 46px;
  object-fit: cover;
  border: 2px solid ${props => props.theme.statuses[props.status]};
  border-radius: 50%;
  cursor: pointer;
`