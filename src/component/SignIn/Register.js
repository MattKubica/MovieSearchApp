import React, { useState, useContext, useCallback } from "react";
import "../SignIn/SignIn.css";
import MovieContext from "../../MovieContext";

/*function Register({ onRouteChange }) {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmailAddress, setRegisterEmailAddress] = useState("");
  const [error, setError] = useState("");
  const { loadUser } = useContext(MovieContext);

  const onRegisterSubmit = useCallback(
    (e) => {
      e.preventDefault();
      fetch("http://localhost:3001/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: registerEmailAddress,
          password: registerPassword,
          name: registerUsername,
        }),
      })
        .then((response) => {
          if (response.status === 400) {
            throw new Error("User already exists");
          }
          return response.json();
        })
        .then((user) => {
          onRouteChange("signin");
          if (user) {
            loadUser(user);
          }
        })
        .catch((error) => {
          if (
            error.message.includes(
              "duplicate key value violates unique constraint"
            )
          ) {
            setError("Email is already in use");
          } else {
            setError(error.message);
          }
        });
    },
    [
      registerEmailAddress,
      registerUsername,
      registerPassword,
      loadUser,
      onRouteChange,
    ]
  );

  const onUsernameChange = (e) => {
    setRegisterUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };

  const onEmailAddressChange = (e) => {
    setRegisterEmailAddress(e.target.value);
  };

  return (
    <div className="login-box">
      <h2>Register</h2>
      <form>
        <div className="user-box">
          <input
            onChange={onUsernameChange}
            type="text"
            id="register-username"
            required
          />
          <label htmlFor="register-username">Username</label>
        </div>
        <div className="user-box">
          <input
            onChange={onEmailAddressChange}
            type="email"
            id="register-email-address"
            required
          />
          <label htmlFor="register-email-address">E-mail address</label>
        </div>
        <div className="user-box">
          <input
            onChange={onPasswordChange}
            type="password"
            id="register-password"
            required
          />
          <label htmlFor="register-password">Password</label>
        </div>
        <div>
          <button onClick={onRegisterSubmit}>Register</button>
          <br />
          <button onClick={() => onRouteChange("signin")}>Sign In</button>
          {error && <p className="heroic-text">{error}</p>}
        </div>
      </form>
    </div>
  );
}
*/
function Register({ onRouteChange }) {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmailAddress, setRegisterEmailAddress] = useState("");
  const [error, setError] = useState("");
  const { loadUser } = useContext(MovieContext);

  const onRegisterSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (!registerUsername || !registerPassword || !registerEmailAddress) {
        throw new Error("Please fill in all fields");
      }

      fetch("http://localhost:3001/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: registerEmailAddress,
          password: registerPassword,
          name: registerUsername,
        }),
      })
        .then((response) => {
          if (response.status === 400) {
            throw new Error("User already exists");
          }
          return response.json();
        })
        .then((user) => {
          loadUser(user);
          onRouteChange("home");
        })
        .catch((error) => setError(error.message));
    },
    [
      registerUsername,
      registerPassword,
      registerEmailAddress,
      loadUser,
      onRouteChange,
    ]
  );

  const onUsernameChange = (e) => {
    setRegisterUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };

  const onEmailAddressChange = (e) => {
    setRegisterEmailAddress(e.target.value);
  };

  return (
    <div className="login-box">
      <h2>Register</h2>
      <form onSubmit={onRegisterSubmit}>
        <div className="user-box">
          <input
            onChange={onUsernameChange}
            type="text"
            id="register-username"
            required
          />
          <label htmlFor="register-username">Username</label>
        </div>
        <div className="user-box">
          <input
            onChange={onEmailAddressChange}
            type="email"
            id="register-email-address"
            required
          />
          <label htmlFor="register-email-address">E-mail</label>
        </div>
        <div className="user-box">
          <input
            onChange={onPasswordChange}
            type="password"
            id="register-password"
            required
          />
          <label htmlFor="register-password">Password</label>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        {error && <p className="heroic-text">{error}</p>}
      </form>
    </div>
  );
}
export default Register;
