import type { ChangeEvent } from "react"
import "./styles.css"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { counerSliceActions, counerSliceSelectors } from "store/redux/counter/counterSlice"


const Counter = () => {
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
      dispatch(counerSliceActions.myStep(step))
    }
  
    const onReset = () => {
      dispatch(counerSliceActions.reset())
    }
    return (
      <div className="page_wrapper">
        <div className="counter_container">
          <div className="minus" onClick={onMinus}>
            -
          </div>
          <div className="value">{count}</div>
          <div className="plus" onClick={onPlus}>
            +
          </div>
        </div>
        <p>шаг</p>
        <input type="number" onChange={getStep} defaultValue={1} />
        <div className="reset" onClick={onReset}>
          RESET
        </div>
      </div>
    )
  }

  export default Counter