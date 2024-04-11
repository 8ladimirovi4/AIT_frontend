import styled from "@emotion/styled";

interface ButtonComponentProps {
  isRed: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: ${({ disabled }) => {

    if (disabled) {
      return "grey";
    }

    return "#64d0f4";
  }};
  color: white;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover{
    background-color: ${({ disabled }) => {

    if (disabled) {
      return "grey";
    }

    return "#25B6EB";
  }};
  };

  &:active{
    background-color: ${({ disabled }) => {

if (disabled) {
  return "grey";
}

return "#64d0f4";
    }}
  }
`;
