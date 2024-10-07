import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import Stars from '../../Image/Stars.png';
import Desktops from '../../Image/desktop.png';
import Desktop1 from '../../Image/desktop1.png';
import Desktop2 from '../../Image/desktop2.png';
import './desktop.css';

const Desktop = () => {
    return (
        <div className='desktop'>
            <div className='Msi-wrapper'>
                <ul className='msi-catalog'>
                    <Link to=''>
                    <li className='msi-catalog-item'>MSI Infinute Series</li>
                    </Link>
                    <Link to=''>
                        <li>MSI Triden</li>
                    </Link>
                    <Link to=''>
                        <li>MSI GL Series</li>
                    </Link>
                    <Link to=''>
                        <li>MSI Nightblade</li>
                    </Link>
                </ul>
                <div className='products1'>
                    <div className='product-item-3'>
                        <Link to='#'>
                            <h2>Desktops</h2>
                            <p>See All Products</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Desktops} alt='CompWhite' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Desktop1} alt='CompBlack' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Desktop2} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Desktop2} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Desktop2} alt='planshet' />
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

export default Desktop;