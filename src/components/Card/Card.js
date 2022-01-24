import React from "react";

export default function Card(props) {
  return (
    <a href="#" class="training__card">
      <h3 class="training__card-title">{props.title}</h3>
      {props.body && <p class="training__card-body">{props.body}</p>}
      <div class="image-overlay"></div>
      <div class="training__image">
        <img src={props.img} alt="Small Group PT" />
      </div>
    </a>
  );
}
