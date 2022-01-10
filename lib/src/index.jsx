import React, { useState } from "react";
import svgTest from "./test.svg";
import jpgTest from "./test.jpg";
import "./test.css";
import "./test.scss";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className=".test .test1">
      <button onClick={() => setCounter(counter + 1)}>Click me</button>

      {counter}

      <img src={svgTest} />
      <img src={jpgTest} />
    </div>
  );
};

export default App;
