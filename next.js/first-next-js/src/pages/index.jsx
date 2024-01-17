import React, { useState } from "react";
export default function Home() {
  const [index, setIndex] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const handlePlus = () => {
    setIndex(index + 1);
  };
  const handleHasah = () => {
    setIndex(index - 1);
  };
  const togle = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <h1>{index}</h1>
      <button onClick={handlePlus}>nemeh</button>
      <button onClick={handleHasah}>hasah</button>
      <button
        style={{ backgroundColor: isOn ? "green" : "red" }}
        onClick={togle}
      >
        {isOn ? "on" : "off"}
      </button>
    </div>
  );
}
