import { Input, TextField } from "@material-ui/core";
import { SyntheticEvent, useState } from "react";
import { LoginResponse } from "../../models/login-response";
import { login } from "../../utils/auth";
import './Login.scss';
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
    <form className="login-form" onSubmit={handleSubmit}> 
      <TextField required id="email-textfield" label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <TextField required id="password-textfield" label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}

{/* <label>
Email:
<input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
</label>
<label>
Password:
<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
</label> */}