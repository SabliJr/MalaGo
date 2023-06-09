import React, { useState } from "react";
import "./TheNavbar.css";

//Icons
import { MdTravelExplore, MdRestaurant, MdOutlineClose } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import { BsHouses } from "react-icons/bs";
import { FaPlaceOfWorship } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import HeroImg from "../../Assets/Malago.jpg";

interface ITheNav {}

const TheNavbar: React.FC<ITheNav> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className='theHeader'>
        <nav className='Nav'>
          <div className='LogoDiv'>
            <MdTravelExplore className='LogoIcon' />
            <h1 className='LogoText'>
              Mala<span className='go'>Go</span>
            </h1>
          </div>
          <div className='btnDiv'>
            <div className={isOpen ? "menuDiv openMenu" : "menuDiv"}>
              <li>Travel Info</li>
              <li>Tickets & Offers</li>
            </div>
            <button className='singIn'>Sing in</button>
            {isOpen ? (
              <MdOutlineClose
                className='MenuIcon'
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <AiOutlineMenu
                className='MenuIcon'
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
        </nav>
      </header>

      <section className='TheHero'>
        <article className='menuItems'>
          <div className='MenuItem'>
            <h4>Things Todo</h4>
            <FaPlaceOfWorship />
          </div>
          <div className='MenuItem'>
            <h4> Hotels</h4>
            <BiBed />
          </div>
          <div className='MenuItem'>
            <h4> Airbnb</h4>
            <BsHouses />
          </div>
          <div className='MenuItem'>
            <h4>Restaurants</h4>
            <MdRestaurant />
          </div>
        </article>
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
    </>
  );
};

export default TheNavbar;
