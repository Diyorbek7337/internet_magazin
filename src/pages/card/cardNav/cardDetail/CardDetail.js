import React from 'react';
import './cardDetail.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import BlackComp from '../../../../Image/blackcomp.png'
import BlackComp1 from '../../../../Image/blackcomp1.png'
import BlackComp2 from '../../../../Image/blackcomp2.png'
import WhiteComp from '../../../../Image/whitecomp.png'
import WhiteComp1 from '../../../../Image/whitecomp1.png'
import  { useState } from 'react';

const CardDetail = () => {
    const [black, setBlack] = useState('black')
    const BlackSwiper = (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide><img src={BlackComp} alt='' className='cardComp'/></SwiperSlide>
            <SwiperSlide><img src={BlackComp1} alt='' className='cardComp1'/></SwiperSlide>
            <SwiperSlide><img src={BlackComp2} alt='' className='cardComp2'/></SwiperSlide>
        </Swiper>

    )
    const WhiteSwiper = (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide><img src={WhiteComp} alt=''  className='cardComp3'/></SwiperSlide>
            <SwiperSlide><img src={WhiteComp1} alt='' className='cardComp4'/></SwiperSlide>
            <SwiperSlide><img src={WhiteComp} alt='' className='cardComp5'/></SwiperSlide>
        </Swiper>
    )
    const isBlackSwiper = black === 'black' ? BlackSwiper: '';
    const isWhiteSwiper = black === 'white' ? WhiteSwiper: '';
    return (
        <div className='aboutProduct'>
            <div className='aboutProduct-wrapper'>
                <div className='inform-about'>
                    <h1>MSI MPG Trident 3</h1>
                    <p>Be the first to review this product</p>
                    <ul className='inform-detail'>
                        <li>Intel Core i7-10700F</li>
                        <li>Intel H410</li>
                        <li>Black and White</li>
                        <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
                        <li>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>
                        <li>2 total slots (64GB Max)</li>
                        <li>12GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
                        <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
                        <li>3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)</li>
                        <li>Intel WGI219Vethernet (10/100/1000M)</li>
                        <li>AX200 (WIFI 6)+BT5.1</li>
                        <li>PSU 330W</li>
                        <li>Fan Cooler</li>
                    </ul>
                    <div className='colors'>
                        <span className={black === 'black' ? 'black-radius active' : 'black-radius'} onClick={() => setBlack('black')}></span>
                        <span className={black === 'white' ? 'white-radius active' : 'white-radius'} onClick={() => setBlack('white')}></span>
                    </div>
                    <h3>Have a Question? <Link to='/Contact'>Contact Us</Link></h3>
                    <h2>+ More Information</h2>
                </div>
                <div className='image-about'>
                    {isBlackSwiper}
                    {isWhiteSwiper}
                </div>
            </div>
        </div>
    );
};

export default CardDetail;





