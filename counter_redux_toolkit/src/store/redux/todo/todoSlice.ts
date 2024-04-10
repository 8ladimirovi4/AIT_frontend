import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Todo, TodoesSliceState } from "./types"

const todoInitialState: TodoesSliceState = {
  tasks: [],
}

const todoSlice = createSlice({
  name: "TODO",
  initialState: todoInitialState,
  reducers: create => ({
    addTask: create.reducer(
      (state: TodoesSliceState, action: PayloadAction<Todo>) => {
        state.tasks = [...state.tasks, action.payload]
      },
    ),
    deleteTask: create.reducer(
      (state: TodoesSliceState, action: PayloadAction<Todo>) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
      },
    ),
    deleteTasks: create.reducer(() => {
      return todoInitialState
    }),
    editTask: create.reducer(
      (state: TodoesSliceState, action: PayloadAction<Todo>) => {
        state.tasks.map(task => {
          return [
            ...state.tasks,
            task.id === action.payload.id
              ? (task.task = action.payload.task)
              : task,
          ]
        })
      },
    ),
    completeTask: create.reducer(
      (state: TodoesSliceState, action: PayloadAction<Todo>) => {
        state.tasks.map(task => {
          return [
            ...state.tasks,
            task.id === action.payload.id
              ? (task.status = action.payload.status)
              : task,
          ]
        })
      },
    ),
  }),
  selectors: {
    tasks: (state: TodoesSliceState) => state.tasks,
  },
})
export const todoSliceActions = todoSlice.actions
export const todoSliceSelectors = todoSlice.selectors
export default todoSlice
