import React from "react";
import "./Plan.css";

const Plan = ({ number, imgUrl }) => {
  return (
    <div className="plans">
      <div className="plan-card">
        <div className="plan-img">
          <img src={imgUrl} alt="" />
        </div>
        <div className="pp-4">
          <ul className="pricing-text ppb">
            <li>
              <span className="fa fa-check-circle mpr-2"></span>Planning
              Solution
            </li>
            <li>
              <span className="fa fa-check-circle mpr-2"></span>10 Construction
              Drawings
            </li>
            <li>
              <span className="fa fa-check-circle mpr-2"></span>Selection
              Materials
            </li>
            <li>
              <span className="fa fa-check-circle mpr-2"></span>Unlimited
              Revision
            </li>
          </ul>
        </div>
        <div className="p-scene">
          <span className="price">
            <sup>$</sup> <span class="p-number">{number}</span> <sub>/mos</sub>
          </span>
          <p className="">
            <a href="#" className="p-btn">
              Get Started
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
