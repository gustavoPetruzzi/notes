import React, { useState } from 'react';
import './App.scss';
import { LoginResponse } from './models/login-response';
import {
  Switch,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import { Auth } from './containers/Auth/Auth';
import { Notes } from './containers/Notes/Notes';
import { Navbar } from './components/Navbar/Navbar';
function App() {
  let history = useHistory();

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const storeUserInfo = (loginResponse: LoginResponse) => {
    const {token, userId} = loginResponse;
    setToken(token);
    setUserId(userId);
    history.push('/');
  }
  return (
    <div className="app">
      <Navbar></Navbar>
      <Switch>
          <Route path="/auth/:type">
            <Auth handleLogin={storeUserInfo} />
          </Route>
          <Route
            path="/"
            render={ () => 
              token && userId ? (
                <Notes token={token} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/auth/login"
                  }}
                />
              )
            }
          />
        </Switch>
    </div>
  )
}
export default App;
