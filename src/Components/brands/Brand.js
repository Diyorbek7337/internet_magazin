import React from "react";
import "./brand.css";
import Brands from "../../Image/brand.png";
import Brands1 from "../../Image/brand1.png";
import Brands2 from "../../Image/brand2.png";
import Brands3 from "../../Image/brand3.png";
import Brands4 from "../../Image/brand4.png";
import Brands5 from "../../Image/brand5.png";
import Brands6 from "../../Image/brand6.png";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Autoplay, Pagination, FreeMode } from "swiper";

const Brand = () => {
  return (
    <div className="brand">
      <div className="brand-wrapper">
        <div className="brand-box">
          <section className="slide-option">
            <div id="infinite" className="highway-slider">
              <div className="highway-barrier">
                <ul className="highway-lane">
                  <li className="highway-car">
                    <img src={Brands} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands1} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands2} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands3} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands4} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands5} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands6} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands1} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands2} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands3} alt="" />
                  </li>
                  <li className="highway-car">
                    <img src={Brands4} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* <Swiper
                        // spaceBetween={30}
                        slidesPerView={5}
                        freeMode={true}
                        // centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        
                        modules={[Autoplay, Pagination, FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={Brands} alt='brand' /></SwiperSlide>
                        <SwiperSlide><img src={Brands1} alt='brand' /></SwiperSlide>
                        <SwiperSlide><img src={Brands2} alt='brand' /></SwiperSlide>
                        <SwiperSlide><img src={Brands3} alt='brand' /></SwiperSlide>
                        <SwiperSlide> <img src={Brands4} alt='brand' /></SwiperSlide>
                        <SwiperSlide><img src={Brands5} alt='brand' /></SwiperSlide>
                        <SwiperSlide><img src={Brands6} alt='brand' /></SwiperSlide>
                        <SwiperSlide><img src={Brands3} alt='brand' /></SwiperSlide>
                        <SwiperSlide><img src={Brands4} alt='brand' /></SwiperSlide>
                    </Swiper> */}
        </div>
      </div>
    </div>
  );
};

export default Brand;
