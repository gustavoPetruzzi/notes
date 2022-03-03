import React, { useState, useEffect } from "react";
import "./App.scss";
import { LoginResponse } from "./models/login-response";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { Auth } from "./containers/Auth/Auth";
import { Notes } from "./containers/Notes/Notes";
import { Navbar } from "./components/Navbar/Navbar";
import Input from "./ui/Input/Input";
function App() {
  let history = useHistory();

  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  const storeUserInfo = (loginResponse: LoginResponse) => {
    const { token, userId } = loginResponse;
    setToken(token);
    setUserId(userId);
    history.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token && userId) {
      setToken(token);
      setUserId(userId);
    }
  }, [token, userId]);

  return (
    <div className="app">
      {token.length > 0 && <Navbar></Navbar>}
      <Switch>
        <Route path="/auth/:type">
          <Auth handleLogin={storeUserInfo} />
        </Route>
        <Route
          path="/"
          render={() =>
            token && userId ? (
              <Notes token={token} userId={userId} />
            ) : (
              <Redirect
                to={{
                  pathname: "/auth/login",
                }}
              />
            )
          }
        />
      </Switch>
    </div>
  );
}
export default App;
