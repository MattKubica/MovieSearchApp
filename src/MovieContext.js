import { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movieList, setMovieList] = useState([]);
  const [profile, setProfile] = useState({
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      enteries: 0,
      joined: "",
    },
  });
  const loadUser = (data) => {
    const user = {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries + 1,
      joined: data.joined,
    };
    setProfile(user);
  };

  const addToRotation = (list) => {
    setMovieList(list);
    console.log("rotation in state", movieList);
  };
  return (
    <MovieContext.Provider
      value={{ movieList, addToRotation, profile, loadUser }}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
