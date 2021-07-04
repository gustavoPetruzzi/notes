import React, { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import { Note } from '../../models/notes';
import { getNotes } from '../../utils/notes-api';
import styles from './Notes.module.scss'
import { NoteForm } from '../../components/NotesForm/NotesForm';
import useKeypress from '../../hooks/useKeypress';
export const Notes = (props: { token: string }) => {
  const [notes, setNotes] = useState([{}]);
  const [isLoading, setIsloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // Load notes
  useEffect( () => {
    setIsloading(true);
    
    getNotes(props.token)
      .then((notes: Note[]) =>{
        setNotes(notes);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsloading(false));

  }, [props.token]);

  useKeypress('Escape', () => setShowModal(false));

  const newNoteModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  
  return (
    <div className={styles.container}>
      {isLoading ? <h1>Loading...</h1> : null}
      {!isLoading  && notes.length > 0 ? <h1>NOTES</h1> : <h2> It seems that you don't have any notes :/</h2>}
      <button className="button is-primary" onClick={newNoteModal}>Add note</button>
      <Modal show={showModal} title="New note" onClose={closeModal}>
        <NoteForm onSave={() => console.log('print')}/>
      </Modal>
    </div>
  )
}