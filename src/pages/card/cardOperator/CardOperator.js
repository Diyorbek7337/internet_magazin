import React from 'react';
import './cardOperator.css'
import { FaLongArrowAltRight } from "react-icons/fa";
const CardOperator = () => {
    return (
        <div className='cardOperator'>
            <div className='cardOperator-wrapper'>
                <div className='faq-wrapper'>
                    <div className='productSupport'>
                        <p>Product Support</p>
                        <FaLongArrowAltRight/>
                    </div>
                    <div className='faqSupport'>
                        <p>FAQ</p>
                        <FaLongArrowAltRight/>
                    </div>
                    <div className='guide'>
                        <p>Our Buyer Guide</p>
                        <FaLongArrowAltRight/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardOperator;