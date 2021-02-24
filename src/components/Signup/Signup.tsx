import { InputType, InputValues } from '../../models/input-values';
import { User } from '../../models/user';
import { SimpleForm } from '../SimpleForm/SimpleForm';
import { Link } from 'react-router-dom';

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
      type: InputType.Text,
      rules: [{
        required: true,
        message: 'Please input your nickname'
      }]
    },
    {
      label: 'Email',
      name: 'email',
      type: InputType.Email,
      rules: [{
        required: true,
        message: 'Please input your email'
      }]
    },
    {
      label: 'Password',
      name: 'password',
      type: InputType.Password,
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
      <Link to="/auth/login">
        Have an account? <strong> Login </strong>
      </Link>
    </SimpleForm>
  )

}
