import { Button, Form, Input } from 'antd';
import { SyntheticEvent } from 'react';
import { InputValues } from '../../models/input-values';
import { User } from '../../models/user';
import { SimpleForm } from '../SimpleForm/SimpleForm';

interface Props {
  isLoading: boolean
  onSave(user: User): void
}

export const Signup = (props: Props) => {
  const {isLoading, onSave } = props;
  const values: InputValues[] = [
    {
      label: 'Nickname',
      name: 'nickname',
      rules: [{
        required: true,
        message: 'Please input your nickname'
      }]
    },
    {
      label: 'Email',
      name: 'email',
      rules: [{
        required: true,
        message: 'Please input your email'
      }]
    },
    {
      label: 'Password',
      name: 'password',
      rules: [{
        required: true,
        message: 'Please input your password'
      }],
    }
  ]
  return (
    <SimpleForm
      name='signup'
      buttonName='Sign up'
      values={values}
      isLoading={isLoading}
      onSave={({nickname, email, password}) => onSave({nickname, email, password} as User)}
    >
      link to login
    </SimpleForm>
  )

}
