import React from "react";
import "../Card/Card.css";
import "../FaceRecognition/FaceRecognition";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "@mui/material";

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
      <div className="card__info__bot">
        <Link
          target="_blank"
          href={`https://www.amazon.com/s?k=${movie.title}&i=instant-video`}>
          <ShoppingCartIcon
            style={{
              color: "darkorange",
              cursor: "pointer",
              marginRight: 20,
            }}
          />
        </Link>
        <Link
          target="_blank"
          href={`https://www.youtube.com/results?search_query=${movie.title}+triler`}>
          <YouTubeIcon style={{ color: "red", cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
}

export default Card;
