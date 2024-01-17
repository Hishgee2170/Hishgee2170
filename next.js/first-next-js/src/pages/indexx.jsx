import React, { useState } from "react";
export default function Home() {
  const [index, setIndex] = useState(0);
  const [ongo, setOngo] = useState("on");

  const handlePlus = () => {
    setIndex(index + 1);
  };
  const handleHasah = () => {
    setIndex(index - 1);
  };
  const togle = () => {
    setOngo("off");
  };
  return (
    <div>
      <h1>{index}</h1>
      <button onClick={handlePlus}>nemeh</button>
      <button onClick={handleHasah}>hasah</button>
      <h1>{ongo}</h1>
      <button onClick={togle}>Click me</button>
    </div>
  );
}
