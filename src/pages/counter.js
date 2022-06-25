import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);

  console.log(counter);

  return (
    <div className="app">
      <div>
        <h2>Here is value</h2>
        <h3 className="count">{counter}</h3>
      </div>
    </div>
  );
}
