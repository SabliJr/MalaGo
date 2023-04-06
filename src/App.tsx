import React from "react";
import "./index.css";

//Components
import TheNavbar from "./Components/TheHeader/TheNavbar";
import Maneuver from "./Components/maneuvering/Maneuver";
import AboutMalt from "./Components/AboutMalta/AboutMalt";
import Activities from "./Components/Destinations/Activities";
import CallToAction from "./Components/Promo/CallToAction";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className='App'>
      <TheNavbar />
      <AboutMalt />
      <Activities />
      <Maneuver />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
