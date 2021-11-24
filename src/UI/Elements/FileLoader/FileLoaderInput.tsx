import styled from "styled-components";

export const FileLoaderInput = styled.input`
  opacity: 0;
  width: 70px;
  top: 0;
  left: 0;
  cursor: pointer;
  height: 100%;
  position: absolute;
  &::before {
    content: '';
  }
`