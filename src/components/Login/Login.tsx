import { Link } from 'react-router-dom';
import { InputType, InputValues } from '../../models/input-values';
import { ButtonType } from '../../ui/Button/button-type';
import { SimpleForm } from '../SimpleForm/SimpleForm';
import styles from './Login.module.scss';
import { Bookmark } from '../Bookmark/Bookmark';
import { BookmarkSize } from '../Bookmark/bookmark-size';
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
      }
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.bookmark}>
        <Bookmark size={BookmarkSize.LARGE} />
      </div>
      <h1>Login</h1>
      <SimpleForm
        buttonName='Login'
        buttonType={ButtonType.DEFAULT}
        values={values}
        isLoading={isLoading}
        onSave={(values) => onSave(values.email, values.password)}
      >
      </SimpleForm>
      <Link to="/auth/signup">
          Don't have an account? <strong>Signup</strong>
      </Link>
    </div>
  )
}
