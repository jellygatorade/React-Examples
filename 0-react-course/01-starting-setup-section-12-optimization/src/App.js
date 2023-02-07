import React, { useState } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowParagraph((prev) => {
      return !prev;
    });
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
