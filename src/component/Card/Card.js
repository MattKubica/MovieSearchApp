import React from "react";
import "../Card/Card.css";
import "../FaceRecognition/FaceRecognition";

function Card({ movie }) {
  return (
    <div
      className="Card"
      style={{
        backgroundImage: "url(" + movie.image + ")",
        backgroundSize: "cover",
      }}>
      <div className="Card__info">
        <h1>{movie.title}</h1>
        <p>{movie.stat1}</p>
        <p>{movie.stat2}</p>
      </div>
    </div>
  );
}

export default Card;
