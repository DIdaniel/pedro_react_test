import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

function App() {
  const [showDiv, setShowDiv] = useState(true);

  return (
    <div className="App">
      <Input showDiv={showDiv} />
      <Buttons />
    </div>
  );
}

export default App;
