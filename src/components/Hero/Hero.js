import React from "react";
import "./Hero.scss";
import hero from "../../assets/hero.jpg";
import arrowDown from "../../assets/arrow-down.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <img src={hero} alt="Lifting heavy!" loading="lazy" />
      </div>

      <div className="container hero__container">
        <div className="hero-wrapper">
          <h1 className="hero-wrapper__heading">
            Make this year <span>your year</span>.
          </h1>
          <p className="hero-wrapper__body">
            Define your limits and pursue your fitness goals with a complimentary all-access
            gym pass!
          </p>
          <a
            href="#"
            className="button button--primary"
            data-content="Find Out More"
            area-label="Find out more"
          >
            Find out More
          </a>
        </div>

        <a href="#scrolldown" className="hero__scrollbtn">
          SCROLL
          <img src={arrowDown} alt="DOWN" />
        </a>
      </div>
    </section>
  );
}
