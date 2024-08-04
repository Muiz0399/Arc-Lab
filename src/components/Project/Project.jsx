import React from "react";
import ProjectIntro from "./ProjectIntro/ProjectIntro";
import NavHeader from "../Home/NavHeader/NavHeader";
import Projects from "../Home/Projects/Projects";
import Footer from "../Home/Footer/Footer";
import ProjectSlid from "./ProjectsSlid/ProjectSlid";

const Project = () => {
    
  return (
    <div>
      <NavHeader />
      <ProjectIntro />
      <Projects />
      <ProjectSlid/>
      <Footer/>
    </div>
  );
};

export default Project;
