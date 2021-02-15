import React, { useState } from 'react';
import './App.scss';
import { Login } from './containers/Login/Login';
import { LoginResponse } from './models/login-response';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
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
    <div className="app">
      <Switch>
        <Route exact path="/login">
          <Login onSave={storeUserInfo}/>
        </Route>
        <Router exact path="/signup"
      </Switch>
    </div>
  )
}
export default App;
