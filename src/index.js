import React from "react";
import { render } from "react-dom";
import Todo from "./Todo";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h1>Todo App</h1>
    <Todo />
  </div>
);

render(<App />, document.getElementById("root"));
