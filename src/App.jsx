// eslint-disable-next-line no-unused-vars
import React from "react";
import HappyNewYear from "./components/happynewyear";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center relative space-background">
      <canvas
        id="myCanvas"
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
      ></canvas>
      <HappyNewYear />
    </div>
  );
}

export default App;
