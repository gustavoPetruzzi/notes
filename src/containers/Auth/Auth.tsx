import { useState } from "react";
import { Login } from "../../components/Login/Login";
import { Signup } from "../../components/Signup/Signup";
import { User } from "../../models/user";
import { login, signup } from "../../utils/auth";


export const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSignup = async (user: User) => {
    const { nickname, email, password } = user;
    setIsLoading(true);
    try {
      await signup(email, password, nickname);
      setIsLoading(false);
      // redirect
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
      // redirect
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      <Login isLoading={ isLoading } onSave={ onLogin }/>
      <Signup isLoading={ isLoading } onSave={ onSignup }/>
    </div>
  )
}