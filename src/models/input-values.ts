export interface InputValues {
  label: string,
  name: string,
  rules?: InputRule[]
}

interface InputRule {
  required: boolean,
  message: string,
}