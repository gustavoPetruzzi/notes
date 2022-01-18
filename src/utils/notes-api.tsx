import axios from "axios";
import { FullNote, Note } from "../models/note";
const baseUrl: string = "http://localhost:8080/notes";

const setConfig = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
export async function getNotes(token: string): Promise<FullNote[]> {
  const { data } = await axios.get<{ notes: FullNote[] }>(
    baseUrl,
    setConfig(token)
  );
  return data.notes;
}

export async function saveNote(token: string, note: Note) {
  const { data } = await axios.post<{ message: string; noteId: number }>(
    baseUrl,
    note,
    setConfig(token)
  );
  return data;
}
