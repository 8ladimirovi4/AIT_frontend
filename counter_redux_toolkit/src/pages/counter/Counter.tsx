import { useState, type ChangeEvent } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counerSliceActions,
  counerSliceSelectors,
} from "store/redux/counter/counterSlice"
import {
  BtnContainer,
  CounterContainer,
  InputContainer,
  PageWrapper,
  StyledStep,
  ValueContainer,
} from "./styles"
import ButtonCommon from "components/buttons/ButtonCommon"
import InputCommon from "components/inputs/InputCommon"

const Counter = () => {
  const [ctrlStep, setCtrlStep] = useState<string>("1")
  const dispatch = useAppDispatch()
  const count = useAppSelector(counerSliceSelectors.count)

  const onPlus = () => {
    dispatch(counerSliceActions.increment())
  }
  const onMinus = () => {
    dispatch(counerSliceActions.decriment())
  }

  const getStep = (e: ChangeEvent<HTMLInputElement>) => {
    const step = parseInt(e.target.value)
    setCtrlStep(e.target.value)
    dispatch(counerSliceActions.myStep(step))
  }

  const onReset = () => {
    setCtrlStep("1")
    dispatch(counerSliceActions.reset())
  }
  return (
    <PageWrapper>
      <CounterContainer>
        <ButtonCommon
          title={"-"}
          colors={["rgb(129, 212, 239)", "rgb(65, 187, 228)"]}
          callback={onMinus}
        />
        <ValueContainer>{count}</ValueContainer>
        <ButtonCommon
          title={"+"}
          colors={["rgb(129, 212, 239)", "rgb(65, 187, 228)"]}
          callback={onPlus}
        />
      </CounterContainer>
      <StyledStep>Step</StyledStep>
      <InputContainer>
        <InputCommon
          width="95"
          height="80"
          border="1px solid lightblue"
          textAligne="center"
          type="number"
          callback={getStep}
          value={ctrlStep}
        />
      </InputContainer>
      <BtnContainer width="150" height="80">
        <ButtonCommon
          title="RESET"
          colors={["rgb(129, 212, 239)", "rgb(65, 187, 228)"]}
          callback={onReset}
        />
      </BtnContainer>
    </PageWrapper>
  )
}

export default Counter
