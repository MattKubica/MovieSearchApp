import React from "react";
import Card from "../Card/Card";
import "../ListOfCards/ListOfCards.css";
import MovieContext from "../../MovieContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const ListOfCards = () => {
  const { movieList } = useContext(MovieContext);

  if (movieList.length === 0) {
    return (
      <div className="ListOfCards">
        <Card
          key={uuidv4()}
          movie={{
            image:
              "https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80",
            title: "search for movie",
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="ListOfCards">
        {movieList.map((movie) => {
          if (movie.i !== undefined) {
            return (
              <Card
                key={uuidv4()}
                movie={{
                  image: movie.i.imageUrl,
                  stat1: movie.s,
                  title: movie.l,
                }}
              />
            );
          } else {
            return (
              <Card
                key={uuidv4()}
                movie={{
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtVT2d3MCqNqhLZl-ZKys7J1Am1GuduiGDA&usqp=CAU",
                  stat1: movie.s,
                  title: movie.l,
                }}
              />
            );
          }
        })}
      </div>
    );
  }
};

export default ListOfCards;
