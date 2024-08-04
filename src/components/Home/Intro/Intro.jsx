import React from "react";
import "./Intro.css";
import { FaPlay } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro" data-aos="fade-up">
      <div className="intro-container">
        <div className="hero-caption" data-aos="fade-up">
          <h1>
            Modern <br />
            <span>Innovative</span>
            <br />
            Architecture
          </h1>

          <p>
            From as low as $20 A small river named Duden flows by their place
            and <br /> supplies it with the necessary regelialia.
          </p>
          <div className="intro-btn">
            <div className="intro-h-btn">
              <a className="hero-btn">Explore Projects</a>
            </div>
            <div className="intro-play">
              <div className="in-play">
                <FaPlay className="i-play" />
                <span></span>
              </div>
              <span>Watch our video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
