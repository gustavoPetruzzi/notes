import { useForm } from "react-hook-form";
import styles from './NotesForm.module.scss';
interface Props {
  onSave(returnValue: any) : void
}

export const NoteForm = (props: Props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { onSave } = props;
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <input 
        name="title" 
        className={styles.input__field}
        type="text"
        placeholder="Title"
      />
    </form>
  )
}