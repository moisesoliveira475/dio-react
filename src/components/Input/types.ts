import { Control, FieldValues } from "react-hook-form"
import { IFormData } from "../../pages/login/types"

export interface IInput {
  leftIcon?: React.ReactNode
  name: string | any
  control: Control<IFormData, any>
  errorMessage?: string
  placeholder: string
  type?: string
}