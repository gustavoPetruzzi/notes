import React, { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { getNotes, saveNote } from "../../utils/notes-api";
import styles from "./Notes.module.scss";
import { NoteForm } from "../../components/NotesForm/NotesForm";
import useKeypress from "../../hooks/useKeypress";
import { getUsers } from "../../utils/user";
import { NoteFormData, FullNote, Note } from "../../models/note";
import { ListedUser } from "../../models/user";
import Button from "../../ui/Button/Button";
import NoteComponent from "../../components/Note/Note";

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

  let content = <h1> Loading... </h1>;

  if (!isLoading && notes.length > 0) {
    content = (
      <>
        {notes.map((note) => (
          <NoteComponent key={note.id} title={note.title}>
            <p> {note.content} </p>
          </NoteComponent>
        ))}
      </>
    );
  } else {
    content = <h2> It seems that you don't have any note :/ </h2>;
  }

  return (
    <div className={styles.container}>
      {content}
      <Button type="button" color="default" onClick={newNoteModal}>
        Add note
      </Button>
      <Modal show={showModal} title="New note" onClose={closeModal}>
        <NoteForm onSave={onSaveHandler} isLoading={isLoading} users={users} />
      </Modal>
    </div>
  );
};
