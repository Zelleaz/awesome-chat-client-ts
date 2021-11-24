import styled from "styled-components";

export const ContactMediaItem = styled.li`
  width: 82px;
  height: 82px;
  background-color: #fff;
  border-radius: 15px;
  margin-right: 17px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  
  &:nth-child(3n) {
    margin-right: 0;
  }
`