import styled from "styled-components";

export const GroupDots = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  right: 15px;
  bottom: 17px;
  &::after, &::before {
    content: '';
    width: 5px;
    height: 5px;
    background-color: #46D362;
    position: absolute;
    border-radius: 50%;
  }
  
  &::after {
    right: 6px;
  }
`