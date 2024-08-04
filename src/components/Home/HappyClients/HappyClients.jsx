import React from "react";
import "./HappyClients.css";
import TestiItems from "./TestiItems/TestiItems";
import person_1 from "../../../img/person_1.jpg";
import person_2 from "../../../img/person_2.jpg";
import person_3 from "../../../img/person_3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const HappyClients = () => {
  return (
    <div className="happy-clients">
      <div className="happy-container">
        <div className="happy-top" data-aos="fade-up">
          <span className="hc-subheading">Testimonial</span>
          <h2 className="pp-head">Happy Clients</h2>
        </div>
        <div className="testimonials" data-aos="fade-up">
          <Swiper
            className="custom-swiper"
            spaceBetween={-150}
            slidesPerView={3}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000 }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              990:{
                slidesPerView:2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide className="ss-lide">
              <TestiItems
                img={person_1}
                para="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                name="Roger Scott"
                position="Marketing Manager"
              />
            </SwiperSlide>
            <SwiperSlide className="ss-lide">
              <TestiItems
                img={person_2}
                para="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                name="Roger Scott"
                position="Marketing Manager"
              />
            </SwiperSlide>
            <SwiperSlide className="ss-lide">
              <TestiItems
                img={person_3}
                para="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                name="Roger Scott"
                position="Marketing Manager"
              />
            </SwiperSlide>

            <SwiperSlide className="ss-lide">
              <TestiItems
                img={person_1}
                para="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                name="Roger Scott"
                position="Marketing Manager"
              />
            </SwiperSlide>
            <SwiperSlide className="ss-lide">
              <TestiItems
                img={person_2}
                para="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                name="Roger Scott"
                position="Marketing Manager"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
