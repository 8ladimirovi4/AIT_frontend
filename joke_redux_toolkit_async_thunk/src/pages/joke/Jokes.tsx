import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  jokeSliceActions,
  jokeSliceSelectors,
} from "store/redux/joke/jokeSlice"
import Joke from "./Joke"
import { PageWrapper, JokeWrapper, BtnJokeContainer} from "./styles"
import ButtonCommon from "components/ButtonCommon"


function Jokes() {
  const dispatch = useAppDispatch()
  const { data, status, error } = useAppSelector(jokeSliceSelectors.joke)

  const handleGetJoke = () => {
    if(status === 'loading') return
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
    <PageWrapper>
      <JokeWrapper>
        <BtnJokeContainer
        width={'150'}
        >
        <ButtonCommon
          callback={handleGetJoke}
          colors={['rgb(129, 212, 239)','rgb(65, 187, 228)']}
          status={status}
          title={'Get Joke'}
            />
        </BtnJokeContainer>
        {jokes}
        {jokes.length ? (
          <BtnJokeContainer
          width={'250'}
          >
          <ButtonCommon
          callback={removeAllJokes}
          colors={['rgb(229, 130, 130)','rgb(237, 88, 88)']}
          title={'Delete All'}
            />
          </BtnJokeContainer>
        ) : (
          <></>
        )}
      </JokeWrapper>
    </PageWrapper>
  )
}

export default Jokes
