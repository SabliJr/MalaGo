import React from "react";
import "./index.css";

//Components
import TheNavbar from "./Components/TheHeader/TheNavbar";
import Maneuver from "./Components/maneuvering/Maneuver";
import AboutMalt from "./Components/AboutMalta/AboutMalt";
import Activities from "./Components/Destinations/Activities";

const App = () => {
  return (
    <div className='App'>
      <TheNavbar />
      <AboutMalt />
      <Activities />
      <Maneuver />
    </div>
  );
};

export default App;
