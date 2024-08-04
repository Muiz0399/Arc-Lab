import React from "react";
import NavHeader from "../Home/NavHeader/NavHeader";
import AboutIntro from "./AboutIntro/AboutIntro";
import HomeAbout from "../Home/HomeAbout/HomeAbout";
import Counter from "../Home/Counter/Counter";
import HappyClients from "../Home/HappyClients/HappyClients";
import PricePlan from "../Home/PricePlan/PricePlan";
import Footer from "../Home/Footer/Footer";

const About = () => {
  return (
    <div>
      <NavHeader />
      <AboutIntro />
      <HomeAbout />
      <Counter />
      <HappyClients />
      <PricePlan />
      <Footer />
    </div>
  );
};

export default About;
