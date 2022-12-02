import React from "react";
import "./Rank.css";
import FaceRecognition from "../FaceRecognition/FaceRecognition";
function Rank({ NAME_OF_MOVIE }) {
  return (
    <div className="rankFrame">
      <div className="rankText__name">
        <p>Your last search was: </p>
      </div>
      <div className="rankText__text__holder">
        <p> Movie</p>
      </div>
    </div>
  );
}

export default Rank;
