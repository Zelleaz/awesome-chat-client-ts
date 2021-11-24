import styled from "styled-components";

export const FileLoaderWrapper = styled.div`
  width: calc(80% - 35px);
  border-radius: 15px;
  padding: 15px;
  display: flex;
  position: absolute;
  background-color: ${props => props.theme.primary};
  bottom: 70px;
  z-index: 99999;
  
  .caret {
    position: absolute;
    bottom: -17px;
  }
  
  .caret svg {
    height: 25px;
    width: 25px;
  }
  
  span svg path {
    fill: ${props => props.theme.primary};
  }
`