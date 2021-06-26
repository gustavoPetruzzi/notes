import { User } from '../../models/user';
import { Link } from 'react-router-dom';
import styles from './Signup.module.scss';
import { Bookmark } from '../Bookmark/Bookmark';
import { BookmarkSize } from '../Bookmark/bookmark-size';
import { ButtonType } from '../../models/button-type';
import { useForm } from 'react-hook-form';
import { getColor } from '../../utils/utils';
interface Props {
  isLoading: boolean
  onSave(user: User): void
}

export const Signup = (props: Props) => {
  const { isLoading, onSave } = props;
  const { register, handleSubmit, formState: { errors }} = useForm({ mode: "onChange"});
  const buttonType = getColor(ButtonType.Default);
  const loadingIcon = isLoading ? 'is-loading' : '';
  const onSubmit = (data: User) => onSave(data);
  return (
    <div className={styles.container}>
      <div className={styles.bookmark}>
        <Bookmark size={BookmarkSize.LARGE} />
      </div>
      <h1> Signup </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label"> NickName </label>
          <input
            name="nickname"
            className="input"
            type="text"
            placeholder="Nickname"
            ref={register({
              required: true,
            })}
          />
          { errors?.nickname?.type === "required" &&
            <p className="help is-danger"> This is required</p>
          }

        </div>
        <div className="field">
          <label className="label"> Email </label>
          <input 
            name="email"
            type="email"
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
            <p className="help is-danger"> Invalid email </p>
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
          {
            errors?.email?.type === "required" &&
            <p className="help is-danger"> This is required</p>
          }
        </div>
        <button className={`button ${buttonType} ${loadingIcon}`}>
          Signup
        </button>
      </form>
      <Link to="/auth/login">
        Have an account? <strong> Login </strong>
      </Link>
    </div>
  )

}
