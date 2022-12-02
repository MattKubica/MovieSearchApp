import React, { useState } from "react";
import "./FaceRecognition.css";

function FaceRecognition() {
  const [InputValue, setInputValue] = useState("");
  let NAME_OF_MOVIE = InputValue;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1ea03eeb9cmshaa8358f7c7192a4p19074fjsn8d1ba89bcf4b",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  function ListData() {
    fetch(
      "https://online-movie-database.p.rapidapi.com/auto-complete?q=" +
        NAME_OF_MOVIE,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const list = data.d;
        //console.log(list);
      })

      .catch((err) => console.error(err));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    ListData();
    console.log("submited", { NAME_OF_MOVIE });
    e.target.reset();
    NAME_OF_MOVIE = "";
  };
  return (
    <div className="faceRecognition">
      <p className="faceRecognition__text">
        {"What movie you would like to know about ?"}
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
              Detect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FaceRecognition;
