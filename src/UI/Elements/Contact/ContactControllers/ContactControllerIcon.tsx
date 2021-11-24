import styled from "styled-components";

export const ContactControllerIcon = styled.div`
  margin-right: 15px;
  margin-top: 2px;
  span svg {
    height: 23px;
    path: {
      fill: ${props => props.theme.primary}
    }
  }
`