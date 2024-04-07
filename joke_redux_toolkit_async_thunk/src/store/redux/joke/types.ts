export interface jokeSliceState {
  data: jokeData[]
  status: "idle" | "loading" | "success" | "error"
  error: any
}

export interface jokeData {
  id: string
  question: string | null
  answer: string
}

export interface jokeResponse {
  id: string
  setup: string
  punchline: string
}
