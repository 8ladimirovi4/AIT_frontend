import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 70%;
  justify-content: start;
  align-items: center;
  padding: 50px;
`
export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  border: 2px solid lightblue;
  border-radius: 5px;
`

export const TodoesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  width: 100%;
  border: 2px solid lightblue;
  border-radius: 5px;
`
export const TaskHeader = styled.h1`

`
export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  min-width: 100%;
  font-size: xx-large;
  font-weight: 500;
  border: 3px solid rgb(88, 195, 230);
  padding: 10px;
  border-radius: 5px;
`
export const TaskContainer = styled.div`
  height: 50px;
`
export const TaskWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`

export const TodoInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 2px solid lightblue;
  border-radius: 5px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: lightblue;
  border: 2px solid rgb(88, 195, 230);
  border-radius: 5px;
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

export const TaskTitle = styled.span<{ status: boolean | undefined }>`
  text-decoration: ${({ status }) => (status ? "line-through" : "none")};
`
