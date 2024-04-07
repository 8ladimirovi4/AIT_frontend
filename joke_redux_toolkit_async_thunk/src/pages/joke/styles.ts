import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const JokeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 600px;
  width: 800px;
  gap: 20px;
  font-size: xx-large;
  font-weight: 500;
  border: 3px solid rgb(88, 195, 230);
  padding: 10px;
  border-radius: 5px;
  overflow-x: none;
  overflow-y: scroll;
`

export const BtnJokeContainer = styled.div<{
  status?: string
  width: string
  align?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${({ align }) => (align ? align : "center")};
  width: ${({ width }) => width + "px"};
  height: fit-content;
  font-size: xx-large;
  font-weight: 500;
`

export const JokeContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: 2px solid rgb(88, 195, 230);
  border-radius: 5px;
`
export const ResponseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(204 242 255);
  gap: 10px;
  padding: 10px;
  width: 100%;
`
export const Question = styled.div``
export const Answer = styled.div``
