import React, { useState } from 'react';
import './App.scss';
import { Login } from './components/Login/Login';
import { LoginResponse } from './models/login-response';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { Auth } from './containers/Auth/Auth';
function App() {
  let history = useHistory();
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const storeUserInfo = (loginResponse: LoginResponse) => {
    const {token, userId} = loginResponse;
    setToken(token);
    setUserId(userId);
    history.push('/my-notes');
  }
  return (
    <Switch>
      <Route path="/auth/:type">
        <Auth />
      </Route>
    </Switch>
  )
}
export default App;
