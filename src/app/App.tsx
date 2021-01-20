import React from "react";
import FirstApp from "../material-ui-training/first-try/FirstApp";
import "./App.css";
import SubHeader from "../material-ui-training/SubHeader/SubHeader";
import Carousel from "../Card/BasicCard/Carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Header from "../material-ui-training/header/Header";
import SellCard from "../Card/BasicCard/SellCard";
import Container from "../containerMaterial/Container";
import User from "../Forms/User";

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <User />
    </div>
  );
}

export default App;
