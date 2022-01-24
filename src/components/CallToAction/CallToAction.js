import React from "react";
import Button from "../UI/Button/Button";
import "./CallToAction.scss";

export default function CallToAction(props) {
  return (
    <section className="get-started mt-1" style={{ backgroundImage: `url(${props.img})` }}>
      <div className="overlay"></div>
      <div className="container">
        <h1 className="text-center">
          {props.firstTitle}
          <br /> <span>{props.secondTitle}</span>
        </h1>
        <Button>Sign up</Button>
      </div>
    </section>
  );
}
