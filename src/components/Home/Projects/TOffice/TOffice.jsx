import React from "react";
import "./TOffice.css";
const TOffice = () => {
  return (
    <div className="twin-office">
      <div className="twin-container">
        <div className="t-o-text" data-aos="fade-up">
          <div className="top-t">
            <span className="g-subheading">Furniture {"{12 / 07 / 2020}"}</span>
            <h2>
              <a href="work.html">Twin Office</a>
            </h2>
          </div>
          <div className="absolute">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove.
            </p>
            <p>
              <a href="#" className="custom-btn">
                View Portfolio
              </a>
            </p>
          </div>
        </div>
        <div className="t-of-img"></div>

      </div>
    </div>
  );
};

export default TOffice;
