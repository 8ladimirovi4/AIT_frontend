export interface Todo {
  id: string
  task?: string
  status?: boolean
}

export interface TodoesSliceState {
  tasks: Todo[]
}
