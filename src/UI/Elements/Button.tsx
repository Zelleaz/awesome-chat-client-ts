import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 14px;
  padding: 10px 22px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.primaryMessageText};
`