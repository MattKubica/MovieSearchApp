import React, { useState, useEffect, useContext } from "react";
import "../SignIn/SignIn.css";
import MovieContext from "../../MovieContext";
import LoadingScreen from "../LoadingScreen";

function SignIn({ onRouteChange }) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { loadUser } = useContext(MovieContext);

  function onSubmitSignIn(event) {
    event.preventDefault();
    setLoading(true);
    fetch("https://moviedb-rlml.onrender.com/signin", {
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
        const { name, email } = data;
        loadUser({ name, email });
        onRouteChange("home");
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setSignInEmail("");
        setSignInPassword("");
        setLoading(false);
      });
  }

  return loading ? (
    <LoadingScreen />
  ) : (
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
