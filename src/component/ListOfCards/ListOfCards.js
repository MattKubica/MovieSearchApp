import React from "react";
import Card from "../Card/Card";
import "../ListOfCards/ListOfCards.css";
import { movieList } from "../../MovieContext";
import MovieContext from "../../MovieContext";
import { useContext } from "react";

const ListOfCards = (i) => {
  const { movieList } = useContext(MovieContext);

  if (movieList.length === 0) {
    return (
      <div className="ListOfCards">
        <Card
          movie={{
            key: 0,
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
        {movieList.map((movie, i) => {
          if (movie.i !== undefined) {
            return (
              <Card
                key={movie.l + i}
                movie={{
                  image: movie.i.imageUrl,
                  stat1: movie.s,
                  title: movie.l,
                }}
              />
            );
          } else {
            return (
              <div className="ListOfCards">
                <Card
                  key={movie.l + i}
                  movie={{
                    image:
                      "https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80",
                    stat1: movie.s,
                    title: movie.l,
                  }}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default ListOfCards;
/**      <Card
        movie={{
          title: "Shreck",
          image:
            "https://th.bing.com/th/id/OIP.PKm5cO-hIz8mxFHrJ3zIWwHaGj?pid=ImgDet&rs=1",
          stat1: "stat",
          stat2: "stat",
        }}
      /> */
