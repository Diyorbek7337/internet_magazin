import React from 'react';
import './msi.css'
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import MsiLaptop from '../../Image/msiLaptop.png'
import MsiLaptop1 from '../../Image/MsiLaptop1.png'
import MsiLaptop2 from '../../Image/MsiLaptop2.png'

import Stars from '../../Image/Stars.png'
const Msi = () => {
    return (
        <div className='Msi'>
            <div className='Msi-wrapper'>
                <ul className='msi-catalog'>
                    <Link to=''>
                    <li className='msi-catalog-item'>MSI GS Series</li>
                    </Link>
                    <Link to=''>
                        <li>MSI GT Series</li>
                    </Link>
                    <Link to=''>
                        <li>MSI GL Series</li>
                    </Link>
                    <Link to=''>
                        <li>MSI GE Series</li>
                    </Link>
                </ul>
                <div className='products1'>
                    <div className='product-item-2'>
                        <Link to='#'>
                            <h2>MSI Laptops</h2>
                            <p>See All Products</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={MsiLaptop} alt='CompWhite' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={MsiLaptop1} alt='CompBlack' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={MsiLaptop2} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={MsiLaptop2} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={MsiLaptop} alt='planshet' />
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

export default Msi;