import React from "react";
import "./SiServices.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SiServices = ({title, desc,icon }) => {
  return (
    <div className="si-services" >
      <div className="s-i-container">
        <div className="s-i-icon">
        <FontAwesomeIcon className="sicon" icon={icon} size="4x"  />
        </div>
        <div className="s-i-text">
        <h3>{title}</h3>
        <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SiServices;
