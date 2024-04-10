import type { ChangeEvent } from "react"

export interface InputProps {
  width?: string
  height?: string
  border?: string
  textAligne?:string
  type?: string
  checked?: boolean
  value?: string
  callback?: (e: ChangeEvent<HTMLInputElement>) => void
}
