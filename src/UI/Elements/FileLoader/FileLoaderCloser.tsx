import styled from "styled-components";
import {ContactCloserWrapper} from "../Contact/ContactCloserWrapper";



export const FileLoaderCloser = styled(ContactCloserWrapper)`
  background-color: ${props => props.theme.secondaryBg};
  left: auto;
  right: 15px;
  top: 15px;
  
  span svg path {
    fill: ${props => props.theme.primaryText};
  }
`