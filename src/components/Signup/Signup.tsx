import { InputType, InputValues } from '../../models/input-values';
import { User } from '../../models/user';
import { SimpleForm } from '../SimpleForm/SimpleForm';
import { Link } from 'react-router-dom';
import styles from './Signup.module.scss';
import { Bookmark } from '../Bookmark/Bookmark';
import { BookmarkSize } from '../Bookmark/bookmark-size';
import { ButtonType } from '../../models/button-type';
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
      <div className={styles.bookmark}>
        <Bookmark size={BookmarkSize.LARGE} />
      </div>
      <h1> Signup </h1>
      <SimpleForm
        buttonName='Sign up'
        buttonType={ButtonType.Default}
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
