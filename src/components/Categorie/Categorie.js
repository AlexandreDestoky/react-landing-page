import React from 'react';
import "./Categorie.scss";
import coaching from "../../assets/expert-coaching.jpg"
import nutrition from "../../assets/nutrition.jpg"
import support from "../../assets/support.jpg"
import Card from '../Card/Card';

export default function Categorie() {
  const dataCategorie = [
    {
    title : "Expert Coaching",
    img: coaching
  },
  {
    title : "Nutrition",
    img: nutrition
  },
    {
    title : "Support",
    img: support
  },
]
  return <section class="categories pt-1" id="scrolldown">
  <h1 class="sr-only">Zoo365</h1>

  <div class="container training">
  {dataCategorie.map(el => <Card {...el}/>)}
{/* 
    <a href="#" class="training__card training__card--square">
      <h3 class="training__card-title">Expert Coaching</h3>
      <div class="image-overlay"></div>
      <div class="training__image">
        <img src={coaching} alt="Our Expert Coaching"/>
      </div>
    </a>

    

    <a href="#" class="training__card training__card--square">
      <h3 class="training__card-title">Nutrition</h3>
      <div class="image-overlay"></div>
      <div class="training__image">
        <img src={nutrition} alt="Nutrition"/>
      </div>
    </a>

    <a href="#" class="training__card training__card--square">
      <h3 class="training__card-title">Support</h3>
      <div class="image-overlay"></div>
      <div class="training__image">
        <img src={support} alt="Support"/>
      </div>
    </a> */}

  </div>

</section>;
}
