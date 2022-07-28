import './App.css';
import React, { useState } from 'react';
import {Board} from "./component/board";

function App() {

  const [text, setText] = useState('')

  return (
    <div className="App">
        <Board/>
    {/*  <div>*/}
    {/*  {text}*/}
    {/*</div>*/}
    </div>
  );

}

export default App;
