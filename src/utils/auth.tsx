import axios from 'axios';
import { LoginResponse } from '../models/login-response';
const baseUrl: string = 'http://localhost:8080';

export async function login(email:string, password:string): Promise<LoginResponse> {
  const { data } = await axios.post<LoginResponse>(`${baseUrl}/auth/login`, {email, password});
  return data;
}

export async function signup(email:string, password:string, nickName: string) {
  
}
