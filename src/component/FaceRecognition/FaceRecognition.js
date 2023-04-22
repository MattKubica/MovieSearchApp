import React, { useEffect, useState, useContext, useRef } from "react";
import "./FaceRecognition.css";
import MovieContext from "../../MovieContext";

function FaceRecognition() {
  const [InputValue, setInputValue] = useState("");
  const { addToRotation, profile, currentLoadingStatus, searchLoading } =
    useContext(MovieContext);
  const inputRef = useRef(null);
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
    currentLoadingStatus(true);
    inputRef.current.value = "";
    inputRef.current.focus();
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
      .catch((err) => console.error(err))
      .finally(() => {
        inputRef.current.value = "";
        inputRef.current.focus();
        currentLoadingStatus(false);
      });
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
              ref={inputRef}
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
