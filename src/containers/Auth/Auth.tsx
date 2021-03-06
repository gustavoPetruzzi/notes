import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Login } from "../../components/Login/Login";
import { Signup } from "../../components/Signup/Signup";
import { LoginResponse } from "../../models/login-response";
import { User } from "../../models/user";
import { login, signup } from "../../utils/auth";

interface AuthProps {
  handleLogin(response: LoginResponse): any;
}

export const Auth = (props: AuthProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { type } = useParams<{ type: string }>();
  const history = useHistory();
  const onSignup = async (user: User) => {
    console.log(user);
    const { nickname, email, password } = user;
    setIsLoading(true);
    try {
      await signup(email, password, nickname);
      setIsLoading(false);
      history.push('/login');
    } catch (error) {
      setIsLoading(false);
      console.log(error);

    }
  }

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { token, userId } = await login(email, password);
      console.log(`token: ${token} userId: ${userId}`);
      setIsLoading(false);
      props.handleLogin({token, userId});
      history.push('/');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div>
      { type === 'login' &&
        <Login isLoading={ isLoading } onSave={ onLogin }/>
      }
      { type === 'signup' && 
        <Signup isLoading={ isLoading } onSave={ onSignup }/>
      }
    </div>
  )
}