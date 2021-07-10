import { useForm } from "react-hook-form";
import { Note } from "../../models/notes";
import styles from './NotesForm.module.scss';
interface Props {
  onSave(formData: Note) : void
  isLoading: boolean;
}

export const NoteForm = (props: Props) => {
  const { register, handleSubmit, formState: { errors }} = useForm<Note>({ mode: "onChange"});

  const { onSave } = props;
  return (
    <div className={styles.container}>
      <h1> Add Note </h1>
      <form onSubmit={handleSubmit(onSave)}>
        <input 
          name="title" 
          className="input"
          type="text"
          placeholder="Title"
          ref={register({
            required: true
          })}
        />
        { errors?.title && 
          <p className="help is-danger"> The title is required</p>
        }
        <textarea
          name="content"
          className="textarea"
          rows={4}
          cols={4}
          placeholder="Content"
        />
        { errors?.content && 
          <p className="help is-danger"> The content is required</p>
        }
        <button type="submit">Save</button>
      </form>
    </div>
  )
}