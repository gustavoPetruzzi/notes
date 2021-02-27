import { InputType, InputValues } from '../../models/input-values';
import { User } from '../../models/user';
import { SimpleForm } from '../SimpleForm/SimpleForm';
import { Link } from 'react-router-dom';
import { ButtonType } from '../Button/button-type';
import styles from './Signup.module.scss';
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
      rules: {
        required: true,
      }
    },
    {
      label: 'Email',
      name: 'email',
      type: InputType.Email,
      rules: {
        required: true,
      }
    },
    {
      label: 'Password',
      name: 'password',
      type: InputType.Password,
      rules: {
        required: true,
      },
    }
  ]
  return (
    <div className={styles.container}>
      <h1> Signup </h1>
      <SimpleForm
        buttonName='Sign up'
        buttonType={ButtonType.DEFAULT}
        values={values}
        isLoading={isLoading}
        onSave={({nickname, email, password}) => onSave({nickname, email, password} as User)}
      >
      </SimpleForm>
      <Link to="/auth/login">
        Have an account? <strong> Login </strong>
      </Link>
    </div>
  )

}
