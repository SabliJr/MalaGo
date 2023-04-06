import React from "react";
import "./Footer.css";

import { MdTravelExplore } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

interface IProps {}

const componentName: React.FC<IProps> = (props) => {
  return (
    <footer className='footer'>
      <hr />
      <article className='footerArt'>
        <div>
          <div className='LogoDiv'>
            <MdTravelExplore className='LogoIcon' />
            <h1 className='LogoText'>
              Mala<span className='go'>Go</span>
            </h1>
          </div>
          <p className='copyRight'>All rights Reserved &copy;2023</p>
        </div>
        <div className='footerLinks'>
          <h4>Useful Links</h4>
          <ul>
            <li>About</li>
            <li>Contact us</li>
            <li>Partners</li>
            <li>Hire Me</li>
          </ul>
        </div>
        <div className='socialDiv'>
          <h4>Connect with us and other visitors.</h4>
          <div>
            <FaInstagramSquare />
            <BsFacebook />
            <BsTwitter />
            <BsYoutube />
          </div>
        </div>
      </article>
    </footer>
  );
};

export default componentName;
