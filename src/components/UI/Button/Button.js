import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <a href="#home">
      <button className="button button__primary">{props.children}</button>
    </a>
  );
}
