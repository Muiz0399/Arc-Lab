import React from "react";
import "./TestiItems.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TestiItems = ({ para, name, position, img }) => {
  return (
    <div className="testi-items">
      <div className="item">
        <div className="item-wrap">
          <span className="fa fa-quote-left quote-icon"></span>
          <p className="item-p">{para}</p>
          <div className="items-center">
            <div className="user-img">
              <img src={img} alt="" />
            </div>
            <div className="pl-3">
              <p className="name">{name}</p>
              <span className="position">{position}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestiItems;
