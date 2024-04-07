import styled from "@emotion/styled"

export const CommonButton = styled.div<{ status?: string; colors: string[] }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ status, colors }) =>
    status === "loading" ? "lightgray" : colors[0]};
  border: ${({ colors }) => "2px solid " + colors[1]};
  border-radius: 5px;
  border-color: ${({ status, colors }) =>
    status === "loading" ? "lightgray" : colors[1]};
  cursor: ${({ status }) => (status === "loading" ? "wait" : "pointer")};

  &:hover {
    background-color: ${({ status, colors }) =>
      status === "loading" ? "lightgray" : colors[1]};
  }
`
