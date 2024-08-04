import React from "react";
import "./SiProps.css";
import SiServices from "../SiServices/SiServices";
import { faCogs, faUsers, faMoneyBillWave, faHome,faCouch, faPaintBrush, faComments ,faHammer, } from '@fortawesome/free-solid-svg-icons';

const SiProps = () => {
  return (
    <div className="si-props">
      <div className="si-container" data-aos="fade-up"> 
        <SiServices
          
          icon={faCogs}
          title="Design Process"
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <SiServices
          
          icon={faUsers}
          title="Supervision"
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <SiServices
          
          icon={faMoneyBillWave}
          title="Budget Planning"
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <SiServices
         
          icon={faHome}
          title="Build a Home For You"
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <SiServices
         
          icon={faCouch}
          title= 'Decoration'
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <SiServices
         
          icon={faPaintBrush}
         title= 'Exterior Design'
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <SiServices
         
          icon={ faComments}
          title= 'Consultation'
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <SiServices
         
          icon={ faHammer}
          title= 'Restoration'
          desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
      </div>
    </div>
  );
};

export default SiProps;
