import React, { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { getNotes, saveNote } from "../../utils/notes-api";
import styles from "./Notes.module.scss";
import { NoteForm } from "../../components/NotesForm/NotesForm";
import useKeypress from "../../hooks/useKeypress";
import { getUsers } from "../../utils/user";
import { NoteFormData, FullNote, Note } from "../../models/note";
import { ListedUser } from "../../models/user";
export const Notes = (props: { token: string; userId: string }) => {
  const [notes, setNotes] = useState<FullNote[]>([]);
  const [users, setUsers] = useState<ListedUser[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Load notes
  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const notesListed = await getNotes(props.token);
        const usersListed = await getUsers(props.token);
        setNotes(notesListed);
        setUsers(usersListed);
      } catch {
        console.log("something");
      } finally {
        setIsloading(false);
      }
    })();
  }, [props.token]);

  useKeypress("Escape", () => setShowModal(false));

  const newNoteModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onSaveHandler = async (data: NoteFormData) => {
    const newNote: Note = { ...data, senderId: +props.userId };
    const response = await saveNote(props.token, newNote);
    setNotes((prevNotes) => {
      const updatedNotes: FullNote[] = [...prevNotes];
      updatedNotes.push({ ...newNote, id: response.noteId });
      return updatedNotes;
    });
  };

  return (
    <div className={styles.container}>
      {isLoading ? <h1>Loading...</h1> : null}
      {!isLoading && notes.length > 0 ? (
        <h1>NOTES</h1>
      ) : (
        <h2> It seems that you don't have any notes :/</h2>
      )}
      <button className="button is-primary" onClick={newNoteModal}>
        Add note
      </button>
      <Modal show={showModal} title="New note" onClose={closeModal}>
        <NoteForm onSave={onSaveHandler} isLoading={isLoading} users={users} />
      </Modal>
    </div>
  );
};
