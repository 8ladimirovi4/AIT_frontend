import { useAppDispatch, useAppSelector } from "store/hooks"
import "./styles.css"
import {
  jokeSliceActions,
  jokeSliceSelectors,
} from "store/redux/joke/jokeSlice"
import Joke from "./Joke"

function Jokes() {
  const dispatch = useAppDispatch()
  const { data, status, error } = useAppSelector(jokeSliceSelectors.joke)

  const handleGetJoke = () => {
    dispatch(jokeSliceActions.getJoke(undefined /*тело для post,delete,put и др.*/))
  }

  const removeAllJokes = () => {
    dispatch(jokeSliceActions.removeAllJokes())
  }

  const jokes = data.map((joke, i) => {
    return (
      <Joke
        key={joke.id}
        id={joke.id}
        list={i + 1}
        question={joke.question}
        answer={joke.answer}
        status={status}
        error={error}
      />
    )
  })

  return (
    <div className="page_wrapper">
      <div className="joke_wrapper">
        <div
          className="button"
          style={{
            backgroundColor: status === "loading" ? "lightgray" : "lightblue",
            borderColor:
              status === "loading" ? "lightgray" : "rgb(88, 195, 230)",
            cursor:  status === "loading" ? "wait" : "pointer"
          }}
          onClick={status === "loading" ? () => {} : handleGetJoke}
        >
          Get Joke
        </div>
        {jokes}
        {jokes.length ? (
          <div className="del_all_button button" onClick={removeAllJokes}>
            Delete all
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Jokes
