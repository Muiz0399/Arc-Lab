import React from "react";
import "./AboutIntro.css";
import { Link } from "react-router-dom";


const AboutIntro = () => {
  return (
    <div className="a-intro" data-aos="fade-up">
      <div className="a-intro-container">
        <div class="a-hero">
          <p class="breadcrumbs" data-aos="fade-up">
            <span className="bc-a">
              <Link to="/">
                Home <i className="fa fa-chevron-right a-a-r"></i>
              </Link>
            </span>{" "}
            <span className="bc-a">
              About us <i className = "fa fa-chevron-right a-a-r " ></i>
            </span>
          </p>
          <h1 className="bread" data-aos="fade-up">About Us</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
