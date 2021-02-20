import React, { useState } from 'react';
import './App.scss';
import { Login } from './components/Login/Login';
import { LoginResponse } from './models/login-response';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import { Auth } from './containers/Auth/Auth';
import { Notes } from './containers/Notes/Notes';
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
      <Router>
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
      </Router>
    </div>
  )
}
export default App;
