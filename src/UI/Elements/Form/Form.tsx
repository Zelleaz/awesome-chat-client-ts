import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 15px 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 60%;
  background-color: ${props => props.theme.secondaryBg};
  border-radius: 15px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`