import { memo } from 'react';
import styles from './NoteImage.module.scss';

const NoteImageComponent = (props: any) => {

  return (
    <div className={styles.container}>
      <div className={styles.pencil}></div>
    </div>
  )
}

export const NoteImage = memo(NoteImageComponent);