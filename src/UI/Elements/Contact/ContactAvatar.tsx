import styled from "styled-components";
import {UserStatuses} from "../../../types";

interface ContactAvatarProps { status: UserStatuses }

export const ContactAvatar = styled.img<ContactAvatarProps>`
  width: 102px;
  height: 102px;
  border: 2px solid ${props => props.theme.statuses[props.status]};
  border-radius: 50%;
  object-fit: cover;
`