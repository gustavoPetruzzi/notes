import { useForm } from "react-hook-form";
import styles from './NotesForm.module.scss';
interface Props {
  onSave(returnValue: any) : void
}

export const NoteForm = (props: Props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { onSave } = props;
  return (
    <div className={styles.container}>
      <h1> Add Note </h1>
      <form onSubmit={handleSubmit(onSave)}>
        <input 
          name="title" 
          className={styles.input__field}
          type="text"
          placeholder="Title"
        />
        <textarea
          name="content"
          className={styles.input__field}
          rows={4}
          cols={4}
          placeholder="Content"
        />
      </form>
    </div>
  )
}