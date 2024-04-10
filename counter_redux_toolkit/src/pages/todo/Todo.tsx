import { useAppDispatch } from "store/hooks"
import type { TodoProps } from "./types"
import { todoSliceActions } from "store/redux/todo/todoSlice"
import { useState } from "react"
import type { ChangeEvent } from "react"
import {
  BtnContainer,
  CheckboxContainer,
  TaskContainer,
  TaskTitle,
  TaskWrapper,
  TodoInputContainer,
  TodoWrapper,
} from "./styles"
import ButtonCommon from "components/buttons/ButtonCommon"
import InputCommon from "components/inputs/InputCommon"

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
    dispatch(todoSliceActions.completeTask({ id, status: e.target.checked }))
  }

  return (
    <TodoWrapper>
      <TaskContainer>
        <TaskTitle status={status}>{task}</TaskTitle>
      </TaskContainer>
      <TodoInputContainer>
        <InputCommon
          value={todoState}
          width={"95"}
          height={"80"}
          border={"none"}
          callback={handleChangeTask}
        />
      </TodoInputContainer>
      <TaskWrapper>
        <BtnContainer height={"50"} width={"250"}>
          <ButtonCommon
            title={"Edit"}
            colors={["rgb(129, 212, 239)", "rgb(65, 187, 228)"]}
            callback={handleEditTsk}
          />
          <ButtonCommon
            title={"Delete"}
            colors={["rgb(229, 130, 130)", "rgb(237, 88, 88)"]}
            callback={handleDeleteTask}
          />
        </BtnContainer>
        <CheckboxContainer>
          <InputCommon
            type={"checkbox"}
            checked={status}
            width={"95"}
            height={"80"}
            border={"none"}
            callback={handleSetStatus}
          />
        </CheckboxContainer>
      </TaskWrapper>
    </TodoWrapper>
  )
}

export default Todo
