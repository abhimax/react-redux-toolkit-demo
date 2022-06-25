import React, { useState } from "react";
import Button from "../components/Button";
import "../assets/css/style.css";
import { increment, decrement } from "../slice/counterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Main() {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div>
        <div>
          <h3 className="count">{counter}</h3>
        </div>
        <div className="buttons">
          <Button title={"+"} onClick={() => dispatch(increment())} />
          <Button title={"-"} onClick={() => dispatch(decrement())} />
        </div>
        <div className="count1" >
        <Link to="/count">
          <button className="countbtn" >
          check count
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
