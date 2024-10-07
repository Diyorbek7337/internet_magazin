import React from 'react';
import './laptopbanner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import AsusBanner from '../../../Image/asusbanner.png'
const LaptopBanner = () => {
    return (
        <div className='laptopBanner'>
            <div className='banner-wrapper'>
                <Swiper
                    modules={[Navigation, Pagination,  Autoplay]}
                    slidesPerView={1}
                    centeredSlides={true}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide><img src={AsusBanner} alt='banner' className='bannerImg'/></SwiperSlide>
                    <SwiperSlide><img src={AsusBanner} alt='banner' className='bannerImg'/></SwiperSlide>
                    <SwiperSlide><img src={AsusBanner} alt='banner' className='bannerImg'/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default LaptopBanner;