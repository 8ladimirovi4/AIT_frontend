import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CounterContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 400px;
`

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200%;
  height: 100px;
  font-weight: 600;
  font-size: xx-large;
  border: 1px solid lightblue;
`

export const StyledStep = styled.p`
  font-weight: 600;
  font-size: xx-large;
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
`
export const BtnContainer = styled.div<{
  status?: string
  width?: string
  height?: string
  align?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: ${({ align }) => (align ? align : "center")};
  width: ${({ width }) => (width ? width + "px" : "fit-content")};
  height: ${({ height }) => (height ? height + "px" : "fit-content")};
  font-size: xx-large;
  font-weight: 500;
`
