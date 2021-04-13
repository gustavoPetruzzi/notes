import { memo } from 'react';
import styles from './Modal.module.scss';

interface Props {
  children: React.ReactNode,
  show: boolean
}

const ModalComponent = (props: Props) => {
  const { children, show } = props;
  const showModal = show ? styles.modal__show : null
  return (
    <div className={ `${styles.modal} ${showModal}` }>
      <div className={styles.modal__content}>
        { children }
      </div>
    </div>
  )
}

export const Modal = memo(ModalComponent)
