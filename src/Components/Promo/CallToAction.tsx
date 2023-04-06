import React from "react";
import "./CallToAction.css";

interface ICTA {}

const CallToAction: React.FC<ICTA> = (props) => {
  return (
    <main className='cta'>
      <div className='promoDiv'>
        <h2>Book your trip to Malta!</h2>
        <p>
          Looking for exceptional trips on Malta deals and vacation packages?
          Incredible experiences await!
        </p>
        <button>Book yor trip today</button>
      </div>
    </main>
  );
};

export default CallToAction;
