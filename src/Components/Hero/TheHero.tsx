import React from "react";
import "../TheHeader/TheNavbar.css";

import HeroImg from "../../Assets/Malago.jpg";

interface IProps {}

const TheHero: React.FC<IProps> = (props) => {
  return (
    <section className='TheHero'>
      <div className='heroContent'>
        <img src={HeroImg} alt='hero img' className='HeroImg' />
        <div className='TextDiv'>
          <h3 className='heroTitle'>Explore Malta</h3>
          <p className='heroText'>
            An open museum in the mediterranean sea, with a 3,000 hours of
            sunshine per year!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheHero;
