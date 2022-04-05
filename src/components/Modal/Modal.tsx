import { memo } from 'react';
import CloseButton from '../../ui/CloseButton/CloseButton';
import styles from './Modal.module.scss';

interface Props {
  children: React.ReactNode,
  show: boolean,
  title: string,
  onClose(): void
}

const ModalComponent = (props: Props) => {
  const { title, children, show, onClose } = props;
  const showModal = show ? styles.modal__show : null
  return (
    <div className={`${styles.modal} ${showModal}`}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <span> { title }</span>
          <CloseButton onClick={onClose} />
        </div>
        { children }
      </div>
    </div>
  )
}

export const Modal = memo(ModalComponent)
