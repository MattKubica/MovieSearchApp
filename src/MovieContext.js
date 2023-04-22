import { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movieList, setMovieList] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
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
    setProfile({ user });
  };

  const addToRotation = (list) => {
    setMovieList(list);
  };
  const currentLoadingStatus = (loading) => {
    setSearchLoading(loading);
  };
  return (
    <MovieContext.Provider
      value={{
        movieList,
        addToRotation,
        profile,
        loadUser,
        currentLoadingStatus,
        searchLoading,
      }}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
