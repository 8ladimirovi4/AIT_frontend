import { CommonButton } from "components/buttons/styles"
import type { ButtonProps } from "components/buttons/types"

function ButtonCommon({ callback = () => {}, colors = ['lightgray', 'gray'], title = 'click me', status }: ButtonProps) {
  return (
    <CommonButton onClick={callback} colors={colors} status={status}>
      {title}
    </CommonButton>
  )
}

export default ButtonCommon
