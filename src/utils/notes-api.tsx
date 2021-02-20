import axios from 'axios';
import { Note } from '../models/notes';
const baseUrl: string = 'http://localhost:8080';

export async function getNotes(token: string): Promise<Note[]> {
  const config = {
    headers: {
      Autorization: `Bearer ${token}`
    }
  }
  
  const { data } = await axios.get<Note[]>(baseUrl, config);
  return data;
}