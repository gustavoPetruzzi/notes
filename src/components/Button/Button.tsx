import { memo } from "react";
import { ButtonType } from "./button-type";
import styles from './Button.module.scss';
interface Props {
  type: ButtonType
  onClick? () : void
  children: any
}


const ButtonComponent = (props: Props) => {
  const {type, onClick} = props;
  const getButtonType = (type: ButtonType) => {
    const buttonsTypes = {
      [ButtonType.PRIMARY] : styles.primary,
      [ButtonType.DANGER] : styles.danger,
      [ButtonType.DEFAULT] : ''
    }
    return buttonsTypes[type];
  }
  const buttonType = type === ButtonType.PRIMARY ? styles.primary : styles.danger
  return (
    <button className={`${styles.default} ${getButtonType(type)}`} onClick={onClick}>
      {props.children}
    </button>
  )
}

export const Button = memo(ButtonComponent);