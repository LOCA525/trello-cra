import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import { useRef } from "react";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <TodoContainer></TodoContainer>
    </div>
  );
}

export default App;
