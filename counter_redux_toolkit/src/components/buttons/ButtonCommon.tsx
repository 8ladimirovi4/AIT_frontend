import { StyledButton } from "components/buttons/styles"
import type { ButtonProps } from "components/buttons/types"

function ButtonCommon({
  callback = () => {},
  colors = ["lightgray", "gray"],
  title = "click me",
  status,
}: ButtonProps) {
  return (
    <StyledButton onClick={callback} colors={colors} status={status}>
      {title}
    </StyledButton>
  )
}

export default ButtonCommon
