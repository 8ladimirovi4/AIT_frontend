import { useAppDispatch } from "store/hooks"
import type { JokeProps } from "./types"
import { jokeSliceActions } from "store/redux/joke/jokeSlice"

function Joke({ id, list, question, answer, status, error }: JokeProps) {
  const dispatch = useAppDispatch()

  const removeJoke = () => {
    dispatch(jokeSliceActions.removeJoke(id))
  }
  return (
    <div className="joke_container">
      <div className="response_wrapper">
        <div>
          {" "}
          {`${list})`} Question: {question}
        </div>
        <div>Answer: {answer}</div>
        <div className="del_button button" onClick={removeJoke}>
          Delete
        </div>
      </div>
    </div>
  )
}

export default Joke
