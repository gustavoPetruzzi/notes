import { useForm } from "react-hook-form";
import { ButtonType } from "../../models/button-type";
import { Note, NoteFormData } from "../../models/note";
import { ListedUser } from "../../models/user";
import { getColor } from "../../utils/utils";
import styles from './NotesForm.module.scss';
interface Props {
  onSave(formData: NoteFormData) : void
  isLoading: boolean;
  users: ListedUser[]
}

export const NoteForm = (props: Props) => {
  const { register, handleSubmit, formState: { errors }} = useForm<NoteFormData>({ mode: "onChange"});

  const { onSave, isLoading, users } = props;
  const buttonType = getColor(ButtonType.Default);
  const loadingIcon = isLoading ? 'is-loading' : '';
  const onSubmit = (data: NoteFormData) => onSave(data);
  return (
    <div className={styles.container}>
      <h1> Add Note </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title" className="label">Title</label>
        <input 
          name="title"
          id="title"
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
        <label htmlFor="content" className="label">Content</label>
        <textarea
          id="content"
          name="content"
          className="textarea"
          rows={4}
          cols={4}
          placeholder="Content"
        />
        { errors?.content && 
          <p className="help is-danger"> The content is required</p>
        }
        <label htmlFor="receiver" className="label"> Receiver </label>
        <select
          className="select"
          name="receiver"
          placeholder="Select a receiver"
          ref={register({
            required: true
          })}
        >
          <option disabled hidden defaultValue="">Select a receiver</option>
          {
            users.map(user => {
              return <option key={user.id} value={user.id}> {user.nickname}</option>
            })
          }
        </select>
        <button className={`button ${buttonType} ${loadingIcon}}`} type="submit">Save</button>
      </form>
    </div>
  )
}