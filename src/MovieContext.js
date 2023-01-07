import { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movieList, setMovieList] = useState([]);

  const addToRotation = (list) => {
    setMovieList(list);
    console.log("rotation in state", movieList);
  };
  return (
    <MovieContext.Provider value={{ movieList, addToRotation }}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
