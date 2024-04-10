import { useAppDispatch, useAppSelector } from "store/hooks"
import Todo from "./Todo"
import "./styles.css"
import {
  todoSliceActions,
  todoSliceSelectors,
} from "store/redux/todo/todoSlice"
import { useState } from "react"
import { v4 } from "uuid"
import type { ChangeEvent } from "react"

function Todoes() {
  const [taskState, setTaskState] = useState<string>("")
  const storeTasks = useAppSelector(todoSliceSelectors.tasks)
  const dispatch = useAppDispatch()

  const handleSetTaskValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskState(e.target.value)
  }

  const handleCreateTask = () => {
    dispatch(todoSliceActions.addTask({ id: v4(), task: taskState }))
    setTaskState("")
  }

  const taskCards = storeTasks.map(task => {
   return <Todo key={v4()} id={task.id} task={task.task} status={task.status} />
})
  return (
    <div className="page_wrapper">
      <div className="content_wrapper">
      <div className="input_wrapper">
        <div className="input_container">
          <input type="text" onChange={handleSetTaskValue} value={taskState} />
        </div>
        <div className="send_button" onClick={handleCreateTask}>
          <span>send</span>
        </div>
      </div>
      <div className="todoes_wrapper">
        {taskCards}
      </div>
      </div>
    </div>
  )
}

export default Todoes
