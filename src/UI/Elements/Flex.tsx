import styled from "styled-components";

interface FlexProps {
    justifyContent?: string
    alignItems?: string
    flexDirection?: string
    alignSelf?: string
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justifyContent ?? 'flex-start'};
  align-items: ${props => props.alignItems ?? 'flex-start'};
  flex-direction: ${props => props.flexDirection ?? 'row'};
  align-self: ${props => props.alignSelf ?? ''};
`