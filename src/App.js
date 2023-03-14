import "./App.css";
import Logo from "./component/Logo/Logo";
import FaceRecognition from "./component/FaceRecognition/FaceRecognition";
import Rank from "./component/Rank/Rank";
import Particle from "./component/Particle";
import ListOfCards from "./component/ListOfCards/ListOfCards";
import { Component, useEffect, useState } from "react";
import { MovieProvider } from "./MovieContext";
import SignIn from "./component/SignIn/SignIn";
import Register from "./component/SignIn/Register";
import Navigation from "./component/FaceRecognition/Navigation";

function App() {
  const [RouteStatus, setRouteStatus] = useState();
  const [IsSignedIn, setIsSignedIn] = useState(Boolean);
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
  useEffect(() => {
    fetch("http://localhost:3001").then((response) =>
      response.json().then((data) => console.log(data))
    );
  });

  function loadUser(data) {
    const user = {};
    setProfile({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        enteries: data.enteries++,
        joined: data.joined,
      },
    });
  }
  var onRouteChange = (route) => {
    setRouteStatus(route);
    if (RouteStatus === "home") {
      setIsSignedIn(true);
      console.log("status" + IsSignedIn);
    } else {
      setIsSignedIn(false);
      console.log("status" + IsSignedIn);
    }
  };
  return (
    <div className="App">
      <MovieProvider>
        <Particle />
        <div className="App__end">
          <Navigation
            isSignedIn={IsSignedIn}
            onRouteChange={onRouteChange}
          />
        </div>
        {RouteStatus === "home" ? (
          <>
            <div className="App__top"></div>
            <div className="App__center">
              <Logo />
              <Rank />
            </div>
            <div className="App__bot">
              <FaceRecognition />
            </div>
            <div className="App__bot__showfield">
              <ListOfCards />
            </div>
          </>
        ) : RouteStatus === "signin" ? (
          <SignIn onRouteChange={onRouteChange} />
        ) : (
          <Register
            loadUser={loadUser}
            onRouteChange={onRouteChange}
          />
        )}
      </MovieProvider>
    </div>
  );
}

export default App;
