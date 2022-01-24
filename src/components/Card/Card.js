import React from "react";

export default function Card(props) {
  return (
    <a href="#home" className="training__card">
      <h3 className="training__card-title">{props.title}</h3>
      {props.body && <p className="training__card-body">{props.body}</p>}
      <div className="image-overlay"></div>
      <div className="training__image">
        <img src={props.img} alt="Small Group PT" />
      </div>
    </a>
  );
}
