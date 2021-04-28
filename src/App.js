import "./App.css";
import React, { useState } from "react";
import Button from "./Button.js";
import Title from "./Title";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="header">
        <Title />
      </header>

      <div className="container">
        <Button counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}

export default App;
