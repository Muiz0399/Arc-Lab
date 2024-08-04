import React from "react";
import "./PricePlan.css";
import Plan from "./Plan/Plan";
import work5 from "../../../img/work5.jpg";
import work2 from "../../../img/work2.jpg";
import work3 from "../../../img/work3.jpg";

const PricePlan = () => {
  return (
    <div className="price-plan">
      <div className="pr-pl-container">
        <div className="happy-top" data-aos="fade-up">
          <span className="hc-subheading">Pricing</span>
          <h2 className="pp-head">Price & Plans</h2>
        </div>
        <div className="pr-pl" data-aos="fade-up">
          <Plan imgUrl={work5} number="78" />
          <Plan imgUrl={work2} number="88" />
          <Plan imgUrl={work3} number="98" />
        </div>
      </div>
    </div>
  );
};

export default PricePlan;
