import React from "react";
import "./Training.scss";
import coaching from "../../assets/expert-coaching.jpg";
import nutrition from "../../assets/nutrition.jpg";
import support from "../../assets/support.jpg";
import Card from "../Card/Card";

export default function Training() {
  const dataTraining = [
    {
      title: "Small Group PT",
      body: "Expect the unexpected in our signature high-intensity interval training class. Cycle through timed interval stations designed to consistently shock your system and deliver results.",
      img: nutrition,
    },
    {
      title: "Classes",
      body: "Develop strength, conditioning, and flexibility with our DESTOKYGYM - inspired fitness routines. These efficient, effective, total-body workouts can be done at home with minimal equipment.",
      img: coaching,
    },
    {
      title: "One To One",
      body: "Receive expert advice, a personalized plan, and 1-on-1 real-time attention with online personal training. Regardless of goal or athletic ability, we have a coach for you. Equipment not necessary.",
      img: support,
    },
  ];
  return (
    <section className="training-options pt-1" id="training">
      <div className="container">
        <h1 className="training-option__heading text-center">
          Your Training <span>Options</span>
        </h1>
        <p className="training-options__body text-center">
          Defy your limits and pursue your fitness goals with a complimentary all-access gym
          pass! Try our wide-variety of classes, train with world-class coaches, and access the
          equipment you need. Available at participating locations. Offers vary by location.
          Terms and conditions may apply.
        </p>

        <div className="training training--options pt-1">
          {dataTraining.map((data, i) => (
            <Card {...data} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
