import React from "react";
import "./Logo.css";
import Tilt from "react-parallax-tilt";
import icon from "./Icon3.png";

function Logo() {
  return (
    <div className="logo">
      <Tilt>
        <div className="tilt__component">
          <img
            src={icon}
            alt="logo"
            className="logo__img"
          />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
