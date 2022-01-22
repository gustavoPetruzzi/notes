import { InputHTMLAttributes } from "react";
import classes from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  id: string;
  register: any;
}

const Input: React.FC<InputProps> = ({ type, label, id, register }) => {
  return (
    <div className={classes["input-wrapper"]}>
      <input
        type={type}
        id={id}
        name={id}
        className={classes["form-control"]}
        placeholder=" "
        ref={register}
      />
      <label className={classes["control-label"]} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
