import styled from "styled-components";

export const Legend = styled.legend`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.primaryText};
  margin-bottom: 15px;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
  * {
    margin-top: 5px;
  }
`