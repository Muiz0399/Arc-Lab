import React from "react";
import "./HomeServices.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HomeServices = ({title, desc, bgColor,icon }) => {
  return (
    <div className="home-services" style={{ backgroundColor: bgColor }}>
      <div className="h-s-container">
        <div className="h-s-icon">
        <FontAwesomeIcon className="hscon" icon={icon} size="4x" />
        </div>
        <div className="h-s-text">
        <h3>{title}</h3>
        <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
