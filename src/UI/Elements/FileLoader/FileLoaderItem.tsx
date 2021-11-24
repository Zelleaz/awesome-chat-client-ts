import styled from "styled-components";

export const FileLoaderItem = styled.div`
  margin-right: 15px;
  font-size: 10px;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .wrapper {
    margin-bottom: 10px;
    width: 62px;
    height: 70px;
    background: url('/file-icon.svg');
    color: #D0D8D8;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`