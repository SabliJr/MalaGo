import React from "react";
import "./index.css";

//Components
import TheNavbar from "./Components/TheHeader/TheNavbar";
import AboutMalt from "./Components/AboutMalta/AboutMalt";

const App = () => {
  return (
    <div className='App'>
      <TheNavbar />
      <AboutMalt />
    </div>
  );
};

export default App;
