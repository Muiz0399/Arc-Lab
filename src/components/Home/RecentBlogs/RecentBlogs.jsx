import React from "react";
import "./RecentBlogs.css";
import Blogs from "./Blogs/Blogs";
import image_1 from "../../../img/image_1.jpg";
import image_2 from "../../../img/image_2.jpg";
import image_3 from "../../../img/image_3.jpg";
import image_4 from "../../../img/image_4.jpg";

const RecentBlogs = () => {
  return (
    <div className="recent-blog">
      <div className="r-b-container">
        <div className="happy-top" data-aos="fade-up">
          <span className="hc-subheading">Blog</span>
          <h2 className="pp-head"> Recent Blog</h2>
        </div>
        <div className="r-b" data-aos="fade-up">
          <Blogs imgUrl={image_1} />
          <Blogs imgUrl={image_2} />
          <Blogs imgUrl={image_3} />
          <Blogs imgUrl={image_4} />
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
