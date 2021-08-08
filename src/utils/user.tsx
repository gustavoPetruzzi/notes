import axios from "axios";
import { ListedUser } from "../models/user";
const baseUrl: string = 'http://localhost:8080/users';


export async function getUsers(token: string): Promise<ListedUser[]> {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const { data } = await axios.get<ListedUser[]>(baseUrl, config);
  return data;
}