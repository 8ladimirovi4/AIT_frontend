import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"
import type { jokeResponse, jokeSliceState } from "./types"
import { getJokeAPI } from "./API"
import { v4 } from "uuid"

const jokeInitialState: jokeSliceState = {
  data: [],
  status: "idle",
  error: undefined,
}

export const jokeSlice = createAppSlice({
  name: "JOKE",
  initialState: jokeInitialState,
  reducers: create => ({
    getJoke: create.asyncThunk(
      async (arg: any, {rejectWithValue}) => {
        const response = await getJokeAPI(/*arg,*/ rejectWithValue)
        return response
      },
      {
        pending: (state: jokeSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (
          state: jokeSliceState,
          action: PayloadAction<jokeResponse>,
        ) => {
          state.status = "success"
          state.data = [
            ...state.data,
            {
              id: v4(),
              question: action.payload?.setup,
              answer: action.payload?.punchline,
            },
          ]
        },
        rejected: (state: jokeSliceState, action: PayloadAction<any>) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
      removeJoke: create.reducer((state: jokeSliceState, action: PayloadAction<string>)=>{
        state.data = [...state.data].filter(joke => {
          return joke.id !== action.payload
        })
      }),
      removeAllJokes: create.reducer((state: jokeSliceState) => {
        return jokeInitialState
      })
  }),
  selectors: {
    joke: (state: jokeSliceState) => state,
  },
})
export const jokeSliceActions = jokeSlice.actions
export const jokeSliceSelectors = jokeSlice.selectors
export default jokeSlice
