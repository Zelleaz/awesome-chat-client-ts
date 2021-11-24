import styled from "styled-components";

interface FileLoaderButtonProps { isActive: boolean }

export const FileLoaderButton = styled.button<FileLoaderButtonProps>`
  background: none;
  border: none;
  color: #fff;
  font-size: 10px;
  position: relative;
  div {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${props => props.isActive ? '1px dashed #fff' : 'none'};
    border-radius: 15px;
    span svg {
      width: 24px;
      height: 24px;
      path {
        fill: #fff;
      }
    }
  }
`