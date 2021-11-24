import styled from "styled-components";

export const ContactSettingsItem = styled.div`
  width: 100%;
  padding: 20px 5px;
  color: ${props => props.theme.contactInfoPrimary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:first-child {
    border-top: 1px solid ${props => props.theme.contactInfoPrimary};
    border-bottom: 1px solid ${props => props.theme.contactInfoPrimary};
  }
  &:last-child {
    border-bottom: 1px solid ${props => props.theme.contactInfoPrimary};
  }
`