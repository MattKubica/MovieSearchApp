import "./App.css";
import Logo from "./component/Logo/Logo";
import FaceRecognition from "./component/FaceRecognition/FaceRecognition";
import Rank from "./component/Rank/Rank";
import Particle from "./component/Particle";
import ListOfCards from "./component/ListOfCards/ListOfCards";
import { useEffect, useState } from "react";
import { MovieProvider } from "./MovieContext";
import SignIn from "./component/SignIn/SignIn";
import Register from "./component/SignIn/Register";
import Navigation from "./component/FaceRecognition/Navigation";

function App() {
  const [routeStatus, setRouteStatus] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (routeStatus === "home") {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [routeStatus]);

  const onRouteChange = (route) => {
    setRouteStatus(route);
  };

  return (
    <div className="App">
      <MovieProvider>
        <Particle />
        <div className="App__end">
          <Navigation
            isSignedIn={isSignedIn}
            onRouteChange={onRouteChange}
          />
        </div>
        {routeStatus === "home" ? (
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
        ) : (
          <>
            {routeStatus === "signin" ? (
              <SignIn onRouteChange={onRouteChange} />
            ) : (
              <Register onRouteChange={onRouteChange} />
            )}
          </>
        )}
      </MovieProvider>
    </div>
  );
}

export default App;
