import { useForm } from "react-hook-form";

interface Props {
  onSave(returnValue: any) : void
}

export const NoteForm = (props: Props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { onSave } = props;
  return (
    <form onSubmit={handleSubmit(onSave)}>
      
    </form>
  )
}