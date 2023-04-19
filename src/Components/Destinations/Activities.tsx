import React, { useState } from "react";
import "./Activities.css";
import ActivitiesData from "../../Data/Activities";

//Icons
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

interface IActivities {}

const Activities: React.FC<IActivities> = (props) => {
  const [start, setStart] = useState<number>(1);

  return (
    <section className='activitiesSec'>
      <div className='ArrowDiv'>
        <h2 className='activities'>Activities</h2>
      </div>
      {start === 1 ? null : (
        <RiArrowLeftLine
          className='ArrowIcon1'
          onClick={() => setStart(start - 1)}
        />
      )}

      <article className='activitiesArt'>
        {ActivitiesData.map((activity) => (
          <div key={activity.id}>
            <img
              src={activity.Image}
              alt='ActivityImage'
              className='activityImg'
            />
            <h4>{activity.title}</h4>
          </div>
        ))}
      </article>

      {start === -1 ? null : (
        <RiArrowRightLine
          className='ArrowIcon2'
          onClick={() => setStart(start + 1)}
        />
      )}
    </section>
  );
};

export default Activities;
