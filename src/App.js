import "./App.css";
import React, { useState } from "react";
import { Board } from "./component/board";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div style={{ marginTop: "40vw", marginLeft: "40vw" }}>
        <Board />
      </div>
    </div>
  );
}

export default App;
