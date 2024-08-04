import React from "react";
import "./HsProps.css";
import HomeServices from "../HomeServices/HomeServices";
import { faCogs, faUsers, faMoneyBillWave, faHome } from '@fortawesome/free-solid-svg-icons';

const HsProps = () => {
  return (
    <div className="hs-props">
      <div className="hs-container" data-aos="fade-up">
        <HomeServices
          bgColor="#96bb7c"
          icon={faCogs}
          title="Design Process"
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <HomeServices
          bgColor="#8eb672"
          icon={faUsers}
          title="Supervision"
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <HomeServices
          bgColor="#91b875"
          icon={faMoneyBillWave}
          title="Budget Planning"
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <HomeServices
          bgColor="#96bb7c"
          icon={faHome}
          title="Build a Home For You"
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
      </div>
    </div>
  );
};

export default HsProps;
