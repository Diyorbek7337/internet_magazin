import React from 'react';
import './gaming.css';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import Stars from '../../Image/Stars.png';
import Gaming1 from '../../Image/gaming1.png'
import Gaming2 from '../../Image/gaming2.png'
import Gaming3 from '../../Image/gaming3.png'
import Gaming4 from '../../Image/gaming4.png'

const Gaming = () => {
    return (
        <div className='gaming'>
            <div className='Msi-wrapper'>
                
                <div className='products1'>
                    <div className='product-item-4'>
                        <Link to='#'>
                            <h2>Gaming Monitors</h2>
                            <p>See All Products</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Gaming1} alt='CompWhite' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Gaming2} alt='CompBlack' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Gaming3} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Gaming4} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Gaming2} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gaming;