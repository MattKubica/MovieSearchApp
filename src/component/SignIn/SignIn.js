import React, { useState, useContext } from "react";
import "../SignIn/SignIn.css";
import MovieContext from "../../MovieContext";

function SignIn({ onRouteChange }) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [error, setError] = useState("");
  const { loadUser } = useContext(MovieContext);

  function onSubmitSignIn(event) {
    event.preventDefault();

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
        // Update profile state with user data
        const { name, email } = data;
        loadUser({ name, email });

        // Change route to home
        onRouteChange("home");
      })
      .catch((error) => {
        setError(error.message);
        setSignInEmail("");
        setSignInPassword("");
      });
  }

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={onSubmitSignIn}>
        <div className="user-box">
          <input
            type="email"
            name="email"
            value={signInEmail}
            required
            onChange={(event) => setSignInEmail(event.target.value)}
          />
          <label>E-mail</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={signInPassword}
            required
            onChange={(event) => setSignInPassword(event.target.value)}
          />
          <label>Password</label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <br />
          <button
            href="#"
            onClick={() => onRouteChange("register")}>
            Register
          </button>
          {error && <p className="heroic-text">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default SignIn;
