import "./App.css";
import React, { useState } from "react";
import { Board } from "./component/board";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh"}}>
        <Board />
      </div>
    </div>
  );
}

export default App;

// display: flex;
//
