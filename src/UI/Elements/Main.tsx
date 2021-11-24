import styled from "styled-components";


// 410px

interface MainProps { isContactVisible: boolean }

export const Main = styled.div<MainProps>`
  padding-bottom: 30px;
  flex-basis: ${props => props.isContactVisible ? 'calc(100% - 350px)' : 'calc(100% - 410px)'};
  position: relative;
  height: 100vh;
  display: flex;
  overflow: scroll;
  flex-direction: column-reverse;
  align-items: flex-start;
  ::-webkit-scrollbar {
    display: none;
  }
`