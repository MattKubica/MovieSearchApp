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
        <h1 className="Card__info__text">{movie.title}</h1>
        <p className="Card__info__text">{movie.stat1}</p>
      </div>
    </div>
  );
}

export default Card;
