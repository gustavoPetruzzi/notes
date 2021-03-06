export interface User {
  email: string,
  password: string,
  nickname: string,
}

export interface FullUser extends User {
  id: number;
}