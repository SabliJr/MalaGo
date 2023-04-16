import React from "react";

//Components
import TheNavbar from "../Components/TheHeader/TheNavbar";
import AboutMalt from "../Components/AboutMalta/AboutMalt";
import Activities from "../Components/Destinations/Activities";
import Maneuver from "../Components/maneuvering/Maneuver";
import CallToAction from "../Components/Promo/CallToAction";
import Footer from "../Components/Footer/Footer";
import ServicesMalgo from "../Components/Services/ServicesMalgo";
import TheHero from "../Components/Hero/TheHero";

interface IProps {}

const TheHomePage: React.FC<IProps> = (props) => {
  return (
    <main>
      <TheNavbar />
      <ServicesMalgo />
      <TheHero />
      <AboutMalt />
      <Activities />
      <Maneuver />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default TheHomePage;
