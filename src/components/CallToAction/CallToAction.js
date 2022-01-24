import React from "react";
import Button from "../UI/Button/Button";
import "./CallToAction.scss";

export default function CallToAction(props) {
  return (
    <section
      class="get-started mt-1"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div class="overlay"></div>
      <div class="container">
        <h1 class="text-center">
          {props.firstTitle}
          <br /> <span>{props.secondTitle}</span>
        </h1>
        <Button>Sign up</Button>
      </div>
    </section>
  );
}
