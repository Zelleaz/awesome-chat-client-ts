import styled from "styled-components";
import {CoordsCSS} from "../../../types";

type KeyboardActionProps = CoordsCSS

export const KeyboardAction = styled.div<KeyboardActionProps>`
  position: absolute;
  bottom: ${props => props.bottom ?? ''}px;
  left: ${props => props.left ?? ''}px;
  cursor: pointer;
  span svg {
    width: 20px;
    height: 25px;
    path {
      fill: ${props => props.theme.primary}
    }
  }
`