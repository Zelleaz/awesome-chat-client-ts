import styled from "styled-components";
import {CoordsCSS} from "../../../types";

interface ContactCloserWrapperProps extends CoordsCSS {
    isFile?: boolean
}

export const ContactCloserWrapper = styled.div<ContactCloserWrapperProps>`
  width: ${props => props.isFile ? '20px' : '30px'};
  height: ${props => props.isFile ? '20px' : '30px'};
  background-color: ${props => props.isFile ? props.theme.secondaryBg : props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute; 
  top: ${props => props.top ? props.top : '20px'};
  left: ${props => props.left ? props.left : '20px'};
  right: ${props => props.right ? `${props.right}px` : 'auto'};
  bottom: ${props => props.bottom ? `${props.bottom}px` : 'auto'};
  cursor: pointer;
  
  span svg path {
    fill: ${props => props.isFile ? props.theme.primaryText : '#fff'};
  }
`