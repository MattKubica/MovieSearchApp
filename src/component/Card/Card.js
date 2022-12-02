import React from "react";
import "../Card/Card.css";
import "../FaceRecognition/FaceRecognition";

function Card({ key, title, image, stat1, stat2 }) {
  return (
    <div
      className="Card"
      style={{
        backgroundImage: { image },
      }}>
      <div
        className="Card__info"
        key={key}>
        <h1>{title}</h1>
        <p>{stat1}</p>
        <p>{stat2}</p>
      </div>
    </div>
  );
}

export default Card;
