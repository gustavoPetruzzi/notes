export interface InputValues {
  label: string,
  name: string,
  type: InputType,
  rules?: InputRule
}

interface InputRule {
  required?: string,
  maxLength?: {
    value: number,
    message: string,
  },
  minLength?: {
    value: number,
    message: string,
  },
  pattern?: {
    value: RegExp,
    message: string
  }
}

export enum InputType {
  Text = 'text',
  Number = 'number',
  Password = 'password',
  Email = 'email'
}