//Should refactor this
export interface User {
  email: string,
  password: string,
  nickname: string,
}

export interface FullUser extends User {
  id: number;
}


export interface ListedUser {
  id: number;
  nickname: string;
  email: string;
}