import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { Bookmark } from "../Bookmark/Bookmark";
import { BookmarkSize } from "../Bookmark/bookmark-size";
import { ButtonType } from "../../models/button-type";
import { getColor } from "../../utils/utils";
import { LoginFormData } from "../../models/login-form-data";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

interface Props {
  isLoading: boolean;
  onSave(formData: LoginFormData): void;
}

export const Login = (props: Props) => {
  const { isLoading, onSave } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ mode: "onChange" });

  const onSubmit = (data: LoginFormData) => onSave(data);
  return (
    <div className={styles.container}>
      <div className={styles.bookmark}>
        <Bookmark size={BookmarkSize.LARGE} />
      </div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="email"
          label="email"
          register={register({
            required: true,
            pattern: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/,
          })}
        />
        {errors?.email?.type === "required" && (
          <p className="help is-danger">This is required</p>
        )}
        {errors?.email?.type === "pattern" && (
          <p className="help is-danger">Invalid email</p>
        )}

        <Input
          type="password"
          id="password"
          label="password"
          register={register({
            required: true,
          })}
        />
        {errors?.password?.type === "required" && (
          <p className="help is-danger"> This is required</p>
        )}
        <Button type="submit">Login</Button>
      </form>
      <Link to="/auth/signup">
        Don't have an account? <strong>Signup</strong>
      </Link>
    </div>
  );
};
