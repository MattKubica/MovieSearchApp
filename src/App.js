import "./App.css";
import Logo from "./component/Logo/Logo";
import FaceRecognition from "./component/FaceRecognition/FaceRecognition";
import Rank from "./component/Rank/Rank";
import Particle from "./component/Particle";
import ListOfCards from "./component/ListOfCards/ListOfCards";
import { Component } from "react";
import { MovieProvider } from "./MovieContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieProvider>
          <Particle />
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
        </MovieProvider>
      </div>
    );
  }
}

export default App;
