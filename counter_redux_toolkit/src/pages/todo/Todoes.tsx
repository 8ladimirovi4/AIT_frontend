import { useAppDispatch, useAppSelector } from "store/hooks"
import Todo from "./Todo"
import {
  todoSliceActions,
  todoSliceSelectors,
} from "store/redux/todo/todoSlice"
import { useState } from "react"
import { v4 } from "uuid"
import type { ChangeEvent } from "react"
import {
  BtnContainer,
  ContentWrapper,
  InputContainer,
  InputWrapper,
  PageWrapper,
  TaskHeader,
  TodoesWrapper,
} from "./styles"
import ButtonCommon from "components/buttons/ButtonCommon"
import InputCommon from "components/inputs/InputCommon"

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

  const handleDeleteTasks = () => {
    dispatch(todoSliceActions.deleteTasks())
  }

  const taskCards = storeTasks.map(task => {
    return (
      <Todo key={v4()} id={task.id} task={task.task} status={task.status} />
    )
  })
  return (
    <PageWrapper>
      <ContentWrapper>
        <InputWrapper>
          <InputContainer>
            {/* <input type="text" onChange={handleSetTaskValue} value={taskState} /> */}
            <InputCommon
              value={taskState}
              width={"90"}
              height={"80"}
              border={"none"}
              callback={handleSetTaskValue}
            />
          </InputContainer>
          <BtnContainer width={"150"} height={"80"}>
            <ButtonCommon
              colors={["lightblue", "rgb(88, 195, 230)"]}
              callback={handleCreateTask}
              title={"Send"}
            />
          </BtnContainer>
        </InputWrapper>
        <TodoesWrapper>
          <TaskHeader>My Tasks</TaskHeader>
          {taskCards}
          {storeTasks.length ? (
            <BtnContainer width={"300"} height={"80"}>
              <ButtonCommon
                colors={["rgb(229, 130, 130)", "rgb(237, 88, 88)"]}
                title={"Delete All"}
                callback={handleDeleteTasks}
              />
            </BtnContainer>
          ) : (
            <></>
          )}
        </TodoesWrapper>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default Todoes
