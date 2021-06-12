import { memo } from 'react';
import takingNotes from '../../assets/taking_notes.svg';
import styles from './NoteImage.module.scss';

const NoteImageComponent = () => {

  return (
    <div className={styles.container}>
      <img alt="taking notes" src={takingNotes}></img>
    </div>
  )
}

export const NoteImage = memo(NoteImageComponent);