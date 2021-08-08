import React, { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import { getNotes } from '../../utils/notes-api';
import styles from './Notes.module.scss'
import { NoteForm } from '../../components/NotesForm/NotesForm';
import useKeypress from '../../hooks/useKeypress';
import { getUsers } from '../../utils/user';
import { Note } from '../../models/note';
import { ListedUser } from '../../models/user';
export const Notes = (props: { token: string }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [users, setUsers] = useState<ListedUser[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // Load notes
  useEffect( () => {
    (async () => {
      try {
        setIsloading(true);
        const notes = await getNotes(props.token);
        const users = await getUsers(props.token);
        setNotes(notes);
        setUsers(users);
      } catch {
        console.log('something');
      } finally {
        setIsloading(false);
      }
    })();
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
        <NoteForm onSave={() => console.log('print')} isLoading={isLoading} users={users} />
      </Modal>
    </div>
  )
}