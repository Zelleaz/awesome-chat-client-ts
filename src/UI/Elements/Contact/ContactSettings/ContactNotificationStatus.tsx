import styled from "styled-components";

interface ContactNotificationStatusProps { isChecked: boolean }

export const ContactNotificationStatus = styled.div<ContactNotificationStatusProps>`
  width: 18px;
  height: 18px;
  background-color: ${props => props.isChecked ? props.theme.primary : 'none'};
  border: 2px solid ${props => props.theme.contactInfoPrimary};
  transition: all ease 0.3s;
  border-radius: 50%;
`