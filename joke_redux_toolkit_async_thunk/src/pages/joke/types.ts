export interface JokeProps {
    id: string
    list: number
    question: string | null,
    answer: string | null
    status: 'idle' | 'loading' | 'success' | 'error'
    error: any
}