import React, { useState } from "react";
import "../SignIn/SignIn.css";
function SignIn({ onRouteChange }) {
  const [signInEmail, setSignInEmail] = useState();
  const [signInPassword, setSignInPassword] = useState();
  function onSubmitSignIn() {
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => {
        if (response.status === 400) {
          throw new Error("Invalid email or password");
        }
        return response.json();
      })
      .then((data) => {
        onRouteChange("home");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={onSubmitSignIn}>
        <div className="user-box">
          <input
            type="e-mail"
            name
            required
            onChange={(event) => setSignInEmail(event.target.value)}
          />
          <label>E-mail</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name
            required
            onChange={(event) => setSignInPassword(event.target.value)}
          />
          <label>Password</label>
        </div>
        <div>
          <a
            href="#"
            onClick={(event) => onSubmitSignIn()}>
            <span />
            <span />
            <span />
            <span />
            Submit
          </a>
          <br />
          <a
            href="#"
            onClick={() => onRouteChange("register")}>
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

export default SignIn;
