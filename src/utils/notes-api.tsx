import axios from 'axios';
import { FullNote } from '../models/notes';
const baseUrl: string = 'http://localhost:8080/notes';

export async function getNotes(token: string): Promise<FullNote[]> {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  
  const { data } = await axios.get<FullNote[]>(baseUrl, config);
  return data;
}