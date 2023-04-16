import React, { useState } from "react";
import "./TheNavbar.css";

//Icons
import { MdTravelExplore, MdOutlineClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";

interface ITheNav {}

const TheNavbar: React.FC<ITheNav> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className='theHeader'>
        <nav className='Nav'>
          <Link to='/' className='LogoDiv'>
            <MdTravelExplore className='LogoIcon' />
            <h1 className='LogoText'>
              Mala<span className='go'>Go</span>
            </h1>
          </Link>
          <div className='btnDiv'>
            <div className={isOpen ? "menuDiv openMenu" : "menuDiv"}>
              <Link to='/travel-info' className='menuLinks'>
                Travel Info
              </Link>
              <Link to='/tickets-and-offers' className='menuLinks'>
                Tickets & Offers
              </Link>
            </div>
            <Link to='/login'>
              <button className='singIn'>Sing in</button>
            </Link>
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
    </>
  );
};

export default TheNavbar;
