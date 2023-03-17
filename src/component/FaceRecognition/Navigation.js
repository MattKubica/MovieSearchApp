import React from "react";
import "../FaceRecognition/Navigation.css";

function Navigation({ onRouteChange, isSignedIn }) {
  if (isSignedIn === true) {
    return (
      <nav href="#">
        <div className="div__nav">
          <p
            className="heroic-text"
            onClick={() => onRouteChange("signin")}>
            Sign Out
          </p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="div__nav">
          <p
            href="#"
            className="heroic-text"
            onClick={() => onRouteChange("signin")}>
            SignIn
          </p>
        </div>
        <div className="div__nav">
          <p
            href="#"
            className="heroic-text"
            onClick={() => onRouteChange("register")}>
            Register
          </p>
        </div>
      </nav>
    );
  }
}

export default Navigation;
