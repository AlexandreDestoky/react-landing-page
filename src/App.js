import CallToAction from "./components/CallToAction/CallToAction";
import Categorie from "./components/Categorie/Categorie";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";
import Training from "./components/Training/Training";
import getStarted from "./assets/get-started.jpg";
import help from "./assets/we-will-help.jpg";

function App() {
  const callToActionData = [
    {
      firstTitle: "Get Started Today",
      secondTitle: "Why Wait",
      img: getStarted,
    },
    {
      firstTitle: "WE WILL HELP YOU GET IN \n THE SHAPE OF YOUR LIFE",
      secondTitle: "LET'S GET STARTED",
      img: help,
    },
  ];
  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <Categorie />
        <CallToAction {...callToActionData[0]} />
        <Training />
        <CallToAction {...callToActionData[1]} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
