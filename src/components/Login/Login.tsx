import { Link } from 'react-router-dom';
import { InputValues } from '../../models/input-values';
import { SimpleForm } from '../SimpleForm/SimpleForm';
//import styles from './Login.module.scss';

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
      <Link to="/auth/signup">
        Don't have an account? <strong>Signup</strong>
      </Link>
    </SimpleForm>
  )
}
