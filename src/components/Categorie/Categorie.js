import React from "react";
import "./Categorie.scss";
import coaching from "../../assets/expert-coaching.jpg";
import nutrition from "../../assets/nutrition.jpg";
import support from "../../assets/support.jpg";
import Card from "../Card/Card";

export default function Categorie() {
  const dataCategorie = [
    {
      title: "Expert Coaching",
      img: coaching,
    },
    {
      title: "Nutrition",
      img: nutrition,
    },
    {
      title: "Support",
      img: support,
    },
  ];
  return (
    <section className="categories pt-1" id="categorie">
      <div className="container training">
        {dataCategorie.map((data, i) => (
          <Card {...data} key={i} />
        ))}
      </div>
    </section>
  );
}
