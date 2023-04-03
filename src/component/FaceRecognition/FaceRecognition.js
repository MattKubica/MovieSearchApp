import React, { useEffect, useState, useContext } from "react";
import "./FaceRecognition.css";
import MovieContext from "../../MovieContext";

function FaceRecognition() {
  const [InputValue, setInputValue] = useState("");
  const { addToRotation, profile } = useContext(MovieContext);
  let NAME_OF_MOVIE = InputValue;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1ea03eeb9cmshaa8358f7c7192a4p19074fjsn8d1ba89bcf4b",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://online-movie-database.p.rapidapi.com/auto-complete?q=" +
        NAME_OF_MOVIE,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const list = data.d;
        addToRotation(list);
      })
      .catch((err) => console.error(err));
    console.log("submited", { NAME_OF_MOVIE });
    e.target.reset();
    NAME_OF_MOVIE = "";
  };
  return (
    <div className="faceRecognition">
      <p className="faceRecognition__text">
        {profile.user.name}, what movie you would like to know about ?
      </p>
      <div className="faceRecognition__form">
        <form onSubmit={handleSubmit}>
          <div className="faceRecognition__form__container">
            <input
              className="faceRecognition__input"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="faceRecognition__button"
              type="submit"
              title="Detect">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FaceRecognition;
