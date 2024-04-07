import { CommonButton } from "components/styles"
import type { ButtonProps } from "components/types"

function ButtonCommon({ callback, colors, title, status }: ButtonProps) {
  return (
    <CommonButton onClick={callback} colors={colors} status={status}>
      {title}
    </CommonButton>
  )
}

export default ButtonCommon
