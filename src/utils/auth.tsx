import axios from 'axios';
import { LoginResponse } from '../models/login-response';
import { FullUser } from '../models/user';
const baseUrl: string = 'http://localhost:8080';


export async function login(email: string, password: string): Promise<LoginResponse> {
  const { data } = await axios.post<LoginResponse>(`${baseUrl}/auth/login`, {email, password});
  return data;
}

export async function signup(email: string, password: string, nickname: string) {
  const signupData = {
    email,
    password,
    nickname
  };
  const { data } = await axios.post<{ message:string }>(`${baseUrl}/auth/signup`, signupData);
  return data;
}

