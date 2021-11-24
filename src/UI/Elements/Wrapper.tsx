import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-right: 30px;
  background: ${props => props.theme.mainBg};
  position: relative;
  display: flex;
  align-items: center;
  transition: background ease 0.3s;
`