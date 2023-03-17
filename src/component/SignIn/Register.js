import React, { useState } from "react";
import "../SignIn/SignIn.css";
import { useContext } from "react";
import { MovieProvider } from "../../MovieContext";
import MovieContext from "../../MovieContext";
function Register({ onRouteChange }) {
  const [registerName, setRegisterName] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [registerEmail, setRegisterEmail] = useState();
  const { loadUser } = useContext(MovieContext);
  const onNameChange = (e) => {
    setRegisterName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };
  const onEmailChange = (e) => {
    setRegisterEmail(e.target.value);
  };

  function onRegisterSubmit(loadUser) {
    fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: registerEmail,
        password: registerPassword,
        name: registerName,
      }),
    })
      .then(
        console.log(
          "Register status",
          { registerEmail },
          { registerName },
          { registerPassword }
        )
      )
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          console.log("this is user:", user);
          loadUser(user);
        }
      })
      .then(onRouteChange("signin"));
  }
  return (
    <div className="login-box">
      <h2>Register</h2>
      <form>
        <div className="user-box">
          <input
            onChange={(e) => setRegisterName(e.target.value)}
            type="text"
            name
            required
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            onChange={(e) => setRegisterEmail(e.target.value)}
            type="e-mail"
            name
            required
          />
          <label>E-mail</label>
        </div>
        <div className="user-box">
          <input
            onChange={(e) => setRegisterPassword(e.target.value)}
            type="password"
            name
            e-mail
            required
          />
          <label>Password</label>
        </div>
        <div>
          <a
            href="#"
            onClick={(e) => onRegisterSubmit(loadUser)}>
            <span />
            <span />
            <span />
            <span />
            Register
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;
