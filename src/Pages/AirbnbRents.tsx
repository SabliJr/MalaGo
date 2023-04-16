import React from "react";

//Components
import TheNavbar from "../Components/TheHeader/TheNavbar";
import ServicesMalgo from "../Components/Services/ServicesMalgo";

interface IProps {}

const AirbnbRents: React.FC<IProps> = (props) => {
  return (
    <main>
      <TheNavbar />
      <ServicesMalgo />
    </main>
  );
};

export default AirbnbRents;
