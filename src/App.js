import "./App.css";
import React, { useState } from "react";
import Navigation from "./component/Navigation/Navigation";
import Logo from "./component/Logo/Logo";
import FaceRecognition from "./component/FaceRecognition/FaceRecognition";
import Rank from "./component/Rank/Rank";
import Particle from "./component/Particle";
import ListOfCards from "./component/ListOfCards/ListOfCards";

function App() {
  return (
    <div className="App">
      <Particle />
      <div className="App__top">
        <Navigation />
      </div>
      <div className="App__center">
        <Logo />
        <Rank />
      </div>
      <div className="App__bot">
        <FaceRecognition />
      </div>
      {
        <div className="App__bot__showfield">
          <ListOfCards />
        </div>
      }
    </div>
  );
}

export default App;
