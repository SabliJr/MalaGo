import React from "react";
import "./AboutMalt.css";

import ReactPlayer from "react-player";

interface IProps {}

const AboutMalt: React.FC<IProps> = (props) => {
  return (
    <section className='aboutMalt'>
      <article className='textArt'>
        <h3>Why you should visit Malta</h3>
        <p>
          With more than 7,000 years of history and countless megaliths,
          medieval dungeons and vibrant towns and villages, Malta is one of the
          most alluring and diverse spots in the Mediterranean. Find beaches
          with changing colors and explore hidden coves.
          <br />
          <br />
          Visit ancient temples or head to the trendiest nightclubs. Valletta’s
          sunny streets, rich heritage and breath-taking architecture have
          earned it the accolade of European Capital of Culture 2018. Malta
          embraces its past and moves effortlessly with the times.
        </p>
      </article>
      <div className='videoDiv'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=MYr8xuEO-l4'
          width={"100%"}
        />
      </div>
    </section>
  );
};

export default AboutMalt;
