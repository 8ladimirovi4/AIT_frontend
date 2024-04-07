import { useAppDispatch } from "store/hooks"
import type { JokeProps } from "./types"
import { jokeSliceActions } from "store/redux/joke/jokeSlice"
import {
  Answer,
  BtnJokeContainer,
  JokeContainer,
  Question,
  ResponseWrapper,
} from "./styles"
import ButtonCommon from "components/ButtonCommon"

function Joke({ id, list, question, answer, status, error }: JokeProps) {
  const dispatch = useAppDispatch()

  const removeJoke = () => {
    dispatch(jokeSliceActions.removeJoke(id))
  }
  return (
    <JokeContainer>
      <ResponseWrapper>
        <Question>
          {" "}
          {`${list})`} Question: {question}
        </Question>
        <Answer>Answer: {answer}</Answer>
        <BtnJokeContainer width={"150"} align={"flex-end"}>
          <ButtonCommon
            callback={removeJoke}
            colors={["rgb(229, 130, 130)", "rgb(237, 88, 88)"]}
            title={"Delete"}
          />
        </BtnJokeContainer>
      </ResponseWrapper>
    </JokeContainer>
  )
}

export default Joke
