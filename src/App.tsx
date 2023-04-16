import React from "react";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import TheHomePage from "./Pages/TheHomePage";
import ThingsToDo from "./Pages/ThingsToDo";
import AirbnbRents from "./Pages/AirbnbRents";
import Hotels from "./Pages/Hotels";
import Restaurants from "./Pages/Restaurants";
import LogingIn from "./Pages/LogingIn";
import TicketsAndOffers from "./Pages/Tickets&Offers";
import TravelInfo from "./Pages/TravelInfo";
import NoPageFound from "./Pages/NoPageFound";

const App = () => {
  return (
    <main className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<TheHomePage />} />
          <Route path='/things-todo' element={<ThingsToDo />} />
          <Route path='/airbnb' element={<AirbnbRents />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/login' element={<LogingIn />} />
          <Route path='/tickets-and-offers' element={<TicketsAndOffers />} />
          <Route path='/travel-info' element={<TravelInfo />} />
          <Route path='/*' element={<NoPageFound />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
