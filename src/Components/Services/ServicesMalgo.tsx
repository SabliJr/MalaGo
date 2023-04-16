import React from "react";
import "../TheHeader/TheNavbar.css";

//Icons
import { MdRestaurant } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import { BsHouses } from "react-icons/bs";
import { FaPlaceOfWorship } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IProps {}

const ServicesMalgo: React.FC<IProps> = (props) => {
  return (
    <article className='menuItems'>
      <Link to='/things-todo' className='MenuItem'>
        <h4>Things Todo</h4>
        <FaPlaceOfWorship />
      </Link>

      <Link to='/hotels' className='MenuItem'>
        <h4> Hotels</h4>
        <BiBed />
      </Link>

      <Link to='/airbnb' className='MenuItem'>
        <h4> Airbnb</h4>
        <BsHouses />
      </Link>

      <Link to='/restaurants' className='MenuItem'>
        <h4>Restaurants</h4>
        <MdRestaurant />
      </Link>
    </article>
  );
};

export default ServicesMalgo;
