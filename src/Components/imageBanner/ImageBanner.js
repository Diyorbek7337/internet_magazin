import React from 'react';
import './imageBanner.css'
import Banner from '../../Image/banner.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay'
const ImageBanner = () => {
    return (
        <div className='imageBanner'>
            <div className='banner-wrapper'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    slidesPerView={1}
                    centeredSlides={true}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide><img src={Banner} alt='banner' className='bannerImg'/></SwiperSlide>
                    <SwiperSlide><img src={Banner} alt='banner' className='bannerImg'/></SwiperSlide>
                    <SwiperSlide><img src={Banner} alt='banner' className='bannerImg'/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ImageBanner;