import { TextareaHTMLAttributes } from "react";
import classes from "./Textarea.module.scss";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  register: any;
  rows?: number;
  cols?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  register,
  rows,
  cols,
}) => {
  const textareaRows = rows ? rows : 4;
  const textareaCols = cols ? cols : 4;
  return (
    <div className={classes["textarea-wrapper"]}>
      <textarea
        id={id}
        name={id}
        cols={textareaCols}
        rows={textareaRows}
        placeholder=" "
        ref={register}
        className={classes["form-control"]}
      />
      <label htmlFor={id} className={classes["control-label"]}>
        {label}
      </label>
    </div>
  );
};

export default Textarea;
