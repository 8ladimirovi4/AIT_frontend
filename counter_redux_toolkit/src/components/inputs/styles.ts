import styled from "@emotion/styled"

export const StyledInput = styled.input<{
  width?: string
  height?: string
  border?: string
  textAligne?:string
}>`
  width: ${({ width }) => (width + '%')};
  height: ${({ height }) => (height + '%')};
  border: ${({ border }) => (border)};
  text-align: ${({textAligne}) => textAligne };
  font-weight: bold;
  font-size: xx-large;
`
