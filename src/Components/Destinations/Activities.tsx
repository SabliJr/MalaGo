import React from "react";
import "./Activities.css";

//Images
import BlueLagoon from "../../Assets/Blue-Lagoon.webp";
import Culture from "../../Assets/Culture.jpg";
import Diving from "../../Assets/Diving.jpeg";
import Festival from "../../Assets/Festival.jpeg";
import Mellieha from "../../Assets/Mellieha.webp";
import Climbing from "../../Assets/Climbing.webp";
import Cruises from "../../Assets/Malta.jpeg";
import WaterSports from "../../Assets/Kayaking.jpeg";

//Icons
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

interface IActivities {}

const Activities: React.FC<IActivities> = (props) => {
  return (
    <section className='activitiesSec'>
      <div className='ArrowDiv'>
        <h2 className='activities'>Activities</h2>
      </div>
      <RiArrowLeftLine className='ArrowIcon1' />
      <article className='activitiesArt'>
        <div>
          <img src={BlueLagoon} alt='BlueLagoon' className='activitiesImg' />
          <h4>Beaches</h4>
        </div>
        <div>
          <img src={Mellieha} alt='Mellieha' className='activitiesImg' />
          <h4>Art & History</h4>
        </div>
        <div>
          <img src={Diving} alt='Diving' className='activitiesImg' />
          <h4>Diving</h4>
        </div>
        <div>
          <img src={Climbing} alt='Climbing' className='activitiesImg' />
          <h4>Climbing</h4>
        </div>
        <div>
          <img src={Cruises} alt='Cruises' className='activitiesImg' />
          <h4>Cruises</h4>
        </div>
        <div>
          <img src={Culture} alt='Culture' className='activitiesImg' />
          <h4>Culture</h4>
        </div>
        <div>
          <img src={Festival} alt='Festival' className='activitiesImg' />
          <h4>Religues Festival</h4>
        </div>
        <div>
          <img src={WaterSports} alt='WaterSports' className='activitiesImg' />
          <h4>Water Sports</h4>
        </div>
      </article>
      <RiArrowRightLine className='ArrowIcon2' />
    </section>
  );
};

export default Activities;
