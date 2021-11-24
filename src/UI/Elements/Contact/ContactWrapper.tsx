import styled from "styled-components";

export const ContactWrapper = styled.div`
  padding: 30px 20px;
  border-radius: 15px;
  margin-left: 30px;
  min-width: 320px;
  max-width: 320px;
  flex-basis: 320px;
  //height: calc(100vh - 60px);
  color: ${props => props.theme.contactInfoPrimary};
  box-shadow: ${props => props.theme.shadow};
  background-color: ${props => props.theme.secondaryBg};
  transition: all ease 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`