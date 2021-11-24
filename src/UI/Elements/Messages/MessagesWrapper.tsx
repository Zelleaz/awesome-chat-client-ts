import styled from "styled-components";

export const MessagesWrapper = styled.div`
  width: 100%;
  padding: 0 60px 30px;
  display: flex;
  height: 100%;
  flex-direction: column-reverse;
  overflow-y: scroll;
  scrollbar-color: ${props => props.theme.primary} ${props => props.theme.secondaryBg};
  scrollbar-width: thin;
  
  ::-webkit-scrollbar {
    border-radius: 5px;
    width: 10px;
    background-color: ${props => props.theme.secondaryBg};
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: ${props => props.theme.shadow};
    border-radius: 5px;
    background-color: ${props => props.theme.primary};
  }
`