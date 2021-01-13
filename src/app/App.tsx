import React from "react";
import FirstApp from "../material-ui-training/FirstApp";
import "./App.css";
import Navbar from "../fireship-io/advanced-dropdowns/Navbar";
import Todos from "../todo/Todos";
import TodoForm from "../TodoForm/TodoForm";

function App() {
  return (
    <div className="App">
      <Todos />
      <TodoForm />
    </div>
  );
}

export default App;
