export interface InputValues {
  label: string,
  name: string,
  type: InputType,
  rules?: InputRule[]
}

interface InputRule {
  required: boolean,
  message: string,
}

export enum InputType {
  Text = 'text',
  Number = 'number',
  Password = 'password',
  Email = 'email'
}