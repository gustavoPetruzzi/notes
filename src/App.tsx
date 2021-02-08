import React, { useState } from 'react';
import './App.scss';
import { Card } from './components/Card/Card';
import { Login } from './containers/Login/Login';
import { LoginResponse } from './models/login-response';


function App() {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const storeUserInfo = (loginResponse: LoginResponse) => {
    const {token, userId} = loginResponse;
    setToken(token);
    setUserId(userId);
  }
  return (
    <div className="app">
      <Card width={300} height={600}>
        <Login onSave={storeUserInfo}/>
      </Card>
    </div>
  )
}
export default App;