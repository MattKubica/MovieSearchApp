import React from "react";
import "./Rank.css";
import FaceRecognition from "../FaceRecognition/FaceRecognition";
function Rank() {
  return (
    <div className="rankFrame">
      <div className="rankText__name">
        <p>Search for movie info:</p>
      </div>
      <div className="rankText__text__holder">
        <p> Movie</p>
      </div>
    </div>
  );
}

export default Rank;
