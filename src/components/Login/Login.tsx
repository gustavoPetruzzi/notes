import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import { useForm } from "react-hook-form";
import { Bookmark } from '../Bookmark/Bookmark';
import { BookmarkSize } from '../Bookmark/bookmark-size';
import { ButtonType } from '../../models/button-type';
import { getColor } from '../../utils/utils';
import { LoginFormData } from '../../models/login-form-data';
interface Props {
  isLoading: boolean
  onSave(formData: LoginFormData): void
}

export const Login = (props: Props) => {
  const { isLoading, onSave } = props;
  const { register, handleSubmit, formState: { errors }} = useForm<LoginFormData>({ mode: "onChange"});
  const buttonType = getColor(ButtonType.Default);
  const loadingIcon = isLoading ? 'is-loading' : '';
  const onSubmit = (data: LoginFormData) => onSave(data);
  return (
    <div className={styles.container}>
      <div className={styles.bookmark}>
        <Bookmark size={BookmarkSize.LARGE} />
      </div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label"> Email </label>
          <input 
            name="email"
            className="input"
            placeholder="Email"
            ref={register({
              required: true,
              pattern: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/
            })}
          />
          { 
            errors?.email?.type === "required" && 
            <p className="help is-danger">This is required</p>
          }
          {
            errors?.email?.type === "pattern" &&
            <p className="help is-danger">Invalid email</p>
          }
        </div>
        <div className="field">
          <label className="label"> Password</label>
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            ref={register({
              required: true
            })}
          />
          { errors?.password?.type === "required" &&
            <p className="help is-danger"> This is required</p>
          }
        </div>
        <button type="submit" className={`button ${buttonType} ${loadingIcon}`}>
          Login
        </button>
      </form>
      <Link to="/auth/signup">
          Don't have an account? <strong>Signup</strong>
      </Link>
    </div>
  )
}
