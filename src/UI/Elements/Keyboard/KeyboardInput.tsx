import styled from "styled-components";
import TextAreaAutoSize from 'react-textarea-autosize'


export const KeyboardInput = styled(TextAreaAutoSize)<any>`
  width: 100%;
  padding: 10px 105px 10px 85px;
  border-radius: 15px;
  outline: none;
  font-size: 14px;
  font-weight: 300;
  color: ${props => props.theme.primaryText};
  border: 1px solid ${props => props.theme.primaryTransparent};
  background-color: ${props => props.theme.secondaryBg};
  resize: none;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`