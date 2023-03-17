import React, { useState } from "react";
import "../SignIn/SignIn.css";
function SignIn({ onRouteChange }) {
  const [signInEmail, setSignInEmail] = useState();
  const [signInPassword, setSignInPassword] = useState();
  const onEmailChange = (event) => {
    setSignInEmail = event.target.value;
  };
  const onPasswordChange = (event) => {
    setSignInPassword = event.target.value;
  };
  function onSubmitSignIn() {
    // console.log("submited successfully", signInEmail, signInPassword);
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          onRouteChange("home");
        }
      });
  }
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={onSubmitSignIn}>
        <div className="user-box">
          <input
            type="text"
            name
            required
            onChange={(event) => setSignInEmail(event.target.value)}
          />
          <label>E-mail</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name
            required
            onChange={(event) => setSignInPassword(event.target.value)}
          />
          <label>Password</label>
        </div>
        <div>
          <a
            href="#"
            onClick={
              (event) => onSubmitSignIn()
              //() => onRouteChange("home")
            }>
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
