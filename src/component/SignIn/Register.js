import React, { useState, useContext, useCallback } from "react";
import "../SignIn/SignIn.css";
import MovieContext from "../../MovieContext";

function Register({ onRouteChange }) {
  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const { loadUser } = useContext(MovieContext);

  const onRegisterSubmit = useCallback(() => {
    fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: registerEmail,
        password: registerPassword,
        name: registerName,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          loadUser(user);
          onRouteChange("signin");
        }
      });
  }, [registerEmail, registerName, registerPassword, loadUser, onRouteChange]);

  const onNameChange = (e) => {
    setRegisterName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };
  const onEmailChange = (e) => {
    setRegisterEmail(e.target.value);
  };

  return (
    <div className="login-box">
      <h2>Register</h2>
      <form>
        <div className="user-box">
          <input
            onChange={onNameChange}
            type="text"
            name
            required
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            onChange={onEmailChange}
            type="e-mail"
            name
            required
          />
          <label>E-mail</label>
        </div>
        <div className="user-box">
          <input
            onChange={onPasswordChange}
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
            onClick={onRegisterSubmit}>
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
