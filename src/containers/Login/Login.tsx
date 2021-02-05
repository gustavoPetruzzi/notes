import { SyntheticEvent, useState } from "react";
import { LoginResponse } from "../../models/login-response";
import { login } from "../../utils/auth";

interface LoginProps {
  onSave(loginResponse: LoginResponse): void
}

export const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      login(email, password);      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <form onSubmit={handleSubmit}> 
      <label>
        Email:
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}