import React from "react";
import "./Projects.css";
import Geometry from "./Geometry/Geometry";
import TwinOffice from "./TwinOffice/TwinOffice";
import ComplexCenter from "./ComplexCenter/ComplexCenter";
import TOffice from "./TOffice/TOffice";
import CCenter from "./CCenter/CCenter";
const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-top">
          <span className="subheading" data-aos="fade-up">Projects</span>
          <h2 className="pp-head" data-aos="fade-up">Our Unique Latest Projects</h2>
          <Geometry/>
          <TwinOffice/>
          <ComplexCenter/>
          <TOffice/>
          <CCenter/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
