import React from "react";
import ServicesIntro from "./ServicesIntro/ServicesIntro";
import SiProps from "./SiProps/SiProps";
import PricePlan from "../Home/PricePlan/PricePlan";
import Footer from "../Home/Footer/Footer";
import NavHeader from "../Home/NavHeader/NavHeader";
const Services = () => {
  return (
    <div>
      <NavHeader/>
      <ServicesIntro />
      <SiProps />
      <PricePlan />
      <Footer />
    </div>
  );
};

export default Services;
