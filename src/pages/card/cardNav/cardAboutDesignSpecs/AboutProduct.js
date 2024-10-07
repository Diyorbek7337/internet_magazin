import React, { useState } from 'react';
import './cardAbout.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import BlackComp from '../../../../Image/blackcomp.png'
import BlackComp1 from '../../../../Image/blackcomp1.png'
import BlackComp2 from '../../../../Image/blackcomp2.png'
import WhiteComp from '../../../../Image/whitecomp.png'
import WhiteComp1 from '../../../../Image/whitecomp1.png'


const AboutProduct = () => {
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
                    <p>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>
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

export default AboutProduct;