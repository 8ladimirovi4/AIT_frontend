export const getJokeAPI = async ( /*arg,*/ rejectWithValue: (data: any) => {}) => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
    // {
    //   method: 'POST',
    //   body: arg
    // }
    )
  const data = await response.json()
  if (!response.ok) {
    rejectWithValue(data)
  } else {
    return data
  }
}
