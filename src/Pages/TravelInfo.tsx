import React from "react";

//Components
import TheNavbar from "../Components/TheHeader/TheNavbar";

interface IProps {}

const TravelInfo: React.FC<IProps> = (props) => {
  return (
    <main>
      <TheNavbar />
    </main>
  );
};

export default TravelInfo;
