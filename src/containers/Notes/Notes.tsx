import { useEffect, useState } from 'react';
import { Note } from '../../models/notes';
import { getNotes } from '../../utils/notes-api';

export const Notes = (props: { token: string }) => {
  const [notes, setNotes] = useState({});
  const [isLoading, setIsloading] = useState(false);
  // Load notes
  useEffect( () => {
    getNotes(props.token)
    .then((notes: Note[]) =>{
      setNotes(notes);
    })
    .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      notes
    </div>
  )
}