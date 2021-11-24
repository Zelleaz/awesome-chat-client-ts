import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 5px 15px;
  border-radius: 15px;
  outline: none;
  font-size: 12px;
  font-weight: 300;
  color: ${props => props.theme.primaryText};
  border: 1px solid ${props => props.theme.primaryTransparent};
  background-color: ${props => props.theme.secondaryBg};
`