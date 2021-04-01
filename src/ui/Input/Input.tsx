import styles from './Input.module.scss';

// TODO check if I can use Memo
interface Props {
  name: string,
  type: string,
  ref: any,
  placeholder: string
}
export const Input = (props: Props) => {
  const { name, type, ref, placeholder } = props;
  return(
    <input
      name={name}
      className={styles.input__field}
      type={type}
      ref={ref}
      placeholder={placeholder}
    />
  )
}