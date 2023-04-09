import React from "react";
import "./maneuvering.css";

import MaltaMap from "../../Assets/TheMap.png";
import Ferry from "../../Assets/Ferry.jpeg";
import Bus from "../../Assets/Bus.jpg";
import Vehicles from "../../Assets/Vehicles.webp";
import SightSeeing from "../../Assets/City_Sightseeing.jpeg";

interface IManeuver {}

const Maneuver: React.FC<IManeuver> = (props) => {
  return (
    <main className='maneuverMain'>
      <article className='maneuver'>
        <div className='maneuverText'>
          <h2 className='maneuverIsland'>Navigate The Islands Easily.</h2>
          <p className='maneuverP'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ea
            sed vel eius dolorem tempore magni architecto doloribus veniam, at
            exercitationem officiis eaque incidunt, cupiditate quia soluta?
            Reiciendis, harum pariatur.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non rem
            aut ipsum deleniti fuga necessitatibus?
          </p>
        </div>
        <img src={MaltaMap} alt='MaltaMap' className='MaltaMap' />
      </article>
      <h4 className='TransTitle'>Transports</h4>
      <div className='TransImgs'>
        <div className='TransImgDiv'>
          <img src={SightSeeing} alt='SightSeeing' className='maneuverImg' />
          <h4>City Sightseeing</h4>
        </div>
        <div className='TransImgDiv'>
          <img src={Ferry} alt='Ferry' className='maneuverImg' />
          <h4>Fast Ferry Between islands</h4>
        </div>
        <div className='TransImgDiv'>
          <img src={Vehicles} alt='Vehicles' className='maneuverImg' />
          <h4>Private Vehicles</h4>
        </div>
        <div className='TransImgDiv'>
          <img src={Bus} alt='Bus' className='maneuverImg' />
          <h4>Public Transportation</h4>
        </div>
      </div>
    </main>
  );
};

export default Maneuver;
