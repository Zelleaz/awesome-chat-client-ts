import styled from "styled-components";

export const ContactController = styled.div`
  width: 100%;
  background-color: ${props => props.theme.secondaryBg};
  padding: 11px 0 11px 43px;
  color: ${props => props.theme.contactInfoPrimary};
  border-radius: 15px;
  border: 1px solid ${props => props.theme.contactInfoPrimary};
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`