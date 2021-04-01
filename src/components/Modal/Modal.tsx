import { memo } from 'react';
import styles from './Modal.module.scss';

interface Props {
  children: React.ReactNode,
  show: boolean
  closeModal(): any
}

const ModalComponent = (props: Props) => {
  const { children, show, closeModal } = props;
  const showModal = show ? styles.modal__show : null
  return (
    <div className={ `${styles.modal} ${showModal}` }>
      <div className={styles.modal__content}>
        <div className={styles.modal__close}>
          <div className={styles.modal__closeButton} onClick={closeModal}>
            x
          </div> 
        </div>
        { children }
      </div>
    </div>
  )
}

export const Modal = memo(ModalComponent)
