import { Button, Form, Input, Spin } from 'antd';
import { SyntheticEvent, useState } from 'react';
import { InputValues } from '../../models/input-values';
import { LoginResponse } from '../../models/login-response';
import { User } from '../../models/user';
import { SimpleForm } from '../SimpleForm/SimpleForm';
import styles from './Login.module.scss';

interface Props {
  isLoading: boolean
  onSave(email:string, password:string): void
}



export const Login = (props: Props) => {
  const { isLoading, onSave } = props;

  const values: InputValues[] = [
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
      }]
    }
  ]
  return (
    <SimpleForm
      name='login'
      buttonName='Login'
      values={values}
      isLoading={isLoading}
      onSave={(values) => onSave(values.email, values.password)}
    >
      link to sign up
    </SimpleForm>
  )
}
