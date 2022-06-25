import React from "react";

export default function Button(props) {
  let { action, title, onClick } = props;
  return <button onClick={onClick}>{title}</button>;
}
