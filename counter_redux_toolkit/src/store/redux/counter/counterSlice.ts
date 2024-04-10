
import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../createAppSlice"
import type { Counter } from "./types"

const counterInitialState: Counter = {
    counterValue: 0,
    counterStep: 1
}

const counterSlice = createAppSlice({
    name: 'COUNTER',
    initialState: counterInitialState,
    reducers: (create) => ({
        myStep: create.reducer((state: Counter, action: PayloadAction<number>) => {
            state.counterStep = action.payload
       }),
       increment: create.reducer((state: Counter) => {
            state.counterValue += state.counterStep
            if(state.counterValue >= 10) state.counterValue = 10
       }),
       decriment: create.reducer((state: Counter) => {
        state.counterValue -= state.counterStep
        if(state.counterValue <= 0) state.counterValue = 0
       }),
       reset: create.reducer(() => counterInitialState)
    }),
      selectors:{
        count: (state: Counter) => state.counterValue
      } 
})

export const counerSliceActions = counterSlice.actions
export const counerSliceSelectors = counterSlice.selectors
export default counterSlice