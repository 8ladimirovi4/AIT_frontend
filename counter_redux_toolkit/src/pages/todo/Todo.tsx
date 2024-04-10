import { useAppDispatch } from "store/hooks"
import "./styles.css"
import type { TodoProps } from "./types"
import { todoSliceActions } from "store/redux/todo/todoSlice"
import { useState } from "react"
import type { ChangeEvent } from "react"

function Todo({ id, task, status }: TodoProps) {
  const [todoState, setTodoState] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleDeleteTask = () => {
    dispatch(todoSliceActions.deleteTask({ id }))
  }

  const handleChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoState(e.target.value)
  }

  const handleEditTsk = () => {
    dispatch(todoSliceActions.editTask({ id, task: todoState }))
  }

  const handleSetStatus = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(todoSliceActions.completeTask({id, status: e.target.checked}))
  }

  return (
    <div className="todo_wrapper">
      <div className="task_container">
        <span style={{textDecoration: status ? 'line-through' : 'none'}}>{task}</span>
      </div>
      <div className="todo_input_container">
        <input type="text" onChange={handleChangeTask} value={todoState} />
      </div>
      <div className="task_wrapper">
        <div className="task_button" onClick={handleEditTsk}>
          <span>Edit</span>
        </div>
        <div className="task_button" onClick={handleDeleteTask}>
          <span>Delete</span>
        </div>
        <div className="checkbox_container">
          <input type="checkbox" 
          onChange={handleSetStatus}
          checked={status}
          />
        </div>
      </div>
    </div>
  )
}

export default Todo
