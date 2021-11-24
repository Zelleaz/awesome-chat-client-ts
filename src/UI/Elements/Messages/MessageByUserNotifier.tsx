import styled from "styled-components";

export const MessageByUserNotifier = styled.div`
  position: relative;
  width: 5px;
  height: 5px;
  margin-left: 15px;
  &::after, &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #46D362;
    position: absolute;
    top: 8px;
  }
  &::before {
    left: -8px;
  }
`