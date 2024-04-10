import { StyledInput } from "./styles"
import type { InputProps } from "./types"

function InputCommon({
  type = "text",
  checked = false,
  value = "",
  width = "100%",
  height = "100%",
  border = "solid",
  textAligne = 'start',
  callback = () => {},
}: InputProps) {
  return (
    <StyledInput
      type={type}
      checked={checked}
      value={value}
      width={width}
      height={height}
      textAligne={textAligne}
      border={border}
      onChange={callback}
    />
  )
}

export default InputCommon
