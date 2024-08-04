import React from "react";
import "./ProjectSlid.css";

const ProjectSlid = () => {
  return (
    <div className="project-slid">
      <div className="project-slid-con">
        <div className="project-slid-num">
          <ul>
            <li>
              <a href="#">&lt;</a>
            </li>
            <li className="active">
              <span>1</span>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">&gt;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlid;
