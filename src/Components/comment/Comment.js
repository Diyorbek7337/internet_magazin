import React from 'react';
import './comment.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import ReactReadMoreReadLess from "react-read-more-read-less";

const Comment = () => {
    const longText = "My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase,  to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it."
    return (
        <div className='comment'>
            <div className='comment-wrapper'>
                <Swiper
                    modules={[Pagination,  Autoplay]}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}

                >
                    <SwiperSlide>
                        <div className='comment-box'>
                            <div className='text-comment'>
                                <ReactReadMoreReadLess
                                    charLimit={100}
                                    readMoreText={"Read more ▼"}
                                    readLessText={"Read less ▲"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                    className='longtext1'
                                    id='longtext'
                                >
                                    {longText}
                                </ReactReadMoreReadLess>
                                <span className='com'>- Tama Brown</span>
                            </div>
                            <a href='#'>Leave Us A Review</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='comment-box'>
                            <div className='text-comment'>
                                <ReactReadMoreReadLess
                                    charLimit={100}
                                    readMoreText={"Read more ▼"}
                                    readLessText={"Read less ▲"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                    className='longtext'
                                >
                                    {longText}
                                </ReactReadMoreReadLess>
                                <span className='com'>- Tama Brown</span>
                            </div>
                            <a href='#'>Leave Us A Review</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='comment-box'>
                            <div className='text-comment'>
                                <ReactReadMoreReadLess
                                    charLimit={100}
                                    readMoreText={"Read more ▼"}
                                    readLessText={"Read less ▲"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                    className='longtext'
                                >
                                    {longText}
                                </ReactReadMoreReadLess>
                                <span className='com'>- Tama Brown</span>
                            </div>
                            <a href='#'>Leave Us A Review</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='comment-box'>
                            <div className='text-comment'>
                                <ReactReadMoreReadLess
                                    charLimit={100}
                                    readMoreText={"Read more ▼"}
                                    readLessText={"Read less ▲"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                    className='longtext'
                                >
                                    {longText}
                                </ReactReadMoreReadLess>
                                <span className='com'>- Tama Brown</span>
                            </div>
                            <a href='#'>Leave Us A Review</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Comment;