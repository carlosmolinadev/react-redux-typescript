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
import { Example } from "../material-ui-training/Carousel/Carousel";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Paper } from "@material-ui/core";
import ContainerEx from "../material-ui-training/ContainerMU/ContainerEx";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#7960fd",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
    type: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
        <Header />
        <User />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
