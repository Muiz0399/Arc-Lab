import React from "react";
import Blogg from "../Blogged/Blogg/Blogg"
import image_1 from "../../../img/image_1.jpg";
import image_2 from "../../../img/image_2.jpg";
import image_3 from "../../../img/image_3.jpg";
import image_4 from "../../../img/image_4.jpg";
import image_5 from "../../../img/image_5.jpg";
import image_6 from "../../../img/image_6.jpg";
import image_7 from "../../../img/image_7.jpg";
import image_8 from "../../../img/image_8.jpg";

const RecentBlogs = () => {
  return (
    <div className="recent-blog">
      <div className="r-b-container">
        <div className="r-b" data-aos="fade-up">
          <Blogg imgUrl={image_1} />
          <Blogg imgUrl={image_2} />
          <Blogg imgUrl={image_3} />
          <Blogg imgUrl={image_4} />
        </div>
        <div className="r-b">
          <Blogg imgUrl={image_5} />
          <Blogg imgUrl={image_6} />
          <Blogg imgUrl={image_7} />
          <Blogg imgUrl={image_8} />
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
