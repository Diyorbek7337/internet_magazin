import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import PayPal from '../../Image/paypal.png'
import Visa from '../../Image/visa.png'
import Maestro from '../../Image/maestro.png'
import Discover from '../../Image/discover.png'
import AmericanExpress from '../../Image/american-express.png'

const Footer = () => {
    const [post, setPost] = useState([
        {
            id: 1,
            link: 'About Us',
            link1: 'CPUS',
            link2: 'Custom PCs',
            link3: 'Everyday Use Notebooks',
            link4: 'Address: 1234 Street Adress City Address, 1234'
        },
        {
            id: 2,
            link: 'About Zip',
            link1: 'Add On Cards',
            link2: 'Servers',
            link3: 'MSI Workstation Series',
            link4: 'Phones: (00) 1234 5678'
        },
        {
            id: 3,
            link: 'Privacy Policy',
            link1: 'Hard Drivers (Internal)',
            link2: 'MSI All-In-One PCs',
            link3: 'MSI Prestige Series',
            link4: 'We are open: Monday-Thursday: 9:00 AM - 5:30 PM'
        },
        {
            id: 4,
            link: 'Search',
            link1: 'Graphic Cards',
            link2: 'HP/Compaq PCs',
            link3: 'Tablets and Pads',
            link4: 'Friday: 9:00 AM - 6:00 PM'
        },
        {
            id: 5,
            link: 'Terms',
            link1: 'Keyboards/Mice',
            link2: 'ASUS PCs',
            link3: 'Netbooks',
            link4: 'Saturday: 11:00 AM - 5:00 PM'
        },
        {
            id: 6,
            link: 'Orders and Returns',
            link1: 'Cases/Power Supplies/Cooling',
            link2: 'Tecs PCs',
            link3: 'Infinity Gaming Notebooks',
            link4: 'E-mail: shop@email.com'
        },
        {
            id: 7, 
            link: 'Contact Us',
            link1: 'RAM (Memory)'
        },
        {
            id: 8,
            link: 'Newsletter Subscription',
            link1: 'RAM (Memory)'
        }
        ,
        {
            id: 9,
            link1: 'Software'
        },
        {
            id: 10,
            link1: 'Speakers/Headsets'
        },
        {
            id: 11,
            link1: 'Motherboards'
        }
    ])

    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-box'>
                    <div className='footer-box-h1'>
                        <h1>Sign Up To Our Newsletter.</h1>
                        <p>Be the first to hear about the latest offers.</p>
                    </div>
                    <div className='subscribe'>
                        <input type='text' placeholder='Your Email' />
                        <button type='submit'>Subscribe</button>
                    </div>
                </div>
                <div className='footer-menu'>
                        <div className='footer-menu-wrapper'>
                            <h2>Information</h2>
                            <ul className='footer-menu-li'>
                                {post.map(posts => {
                                    return (
                                        <Link to='' key={posts.id}>
                                            <li>{posts.link}</li>
                                        </Link>
                                    )
                                })}

                            </ul>
                        </div>
                        <div className='footer-menu-wrapper'>
                            <h2>PC Parts</h2>
                            <ul className='footer-menu-li'>
                                {post.map(posts => {
                                    return (
                                        <Link to='' key={posts.id}>
                                            <li>{posts.link1}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='footer-menu-wrapper'>
                            <h2>Desktop PCs</h2>
                            <ul className='footer-menu-li'>
                                {post.map(posts => {
                                    return (
                                        <Link to='' key={posts.id}>
                                            <li>{posts.link2}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                    
                    
                        <div className='footer-menu-wrapper'>
                            <h2>Laptops</h2>
                            <ul className='footer-menu-li'>
                                {post.map(posts => {
                                    return (
                                        <Link to='' key={posts.id}>
                                            <li>{posts.link3}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='footer-menu-wrapper'>
                            <h2>Address</h2>
                            <ul className='footer-menu-li'>
                                {post.map(posts => {
                                    return (
                                        <Link to='' key={posts.id}>
                                            <li>{posts.link4}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                
            </div>
            <hr />
            <div className='payment'>
                <ul className='social-footer'>
                    <li className='social-item1'><a href='#Facebook'><FaFacebookSquare /></a></li>
                    <li className='social-item1'><a href='Instagram'><FaInstagram /></a></li>
                </ul>
                <div className='pay-method'>
                    <img src={PayPal} alt='paypal' />
                    <img src={Visa} alt='paypal' />
                    <img src={Maestro} alt='paypal' />
                    <img src={Discover} alt='paypal' />
                    <img src={AmericanExpress} alt='paypal' />
                </div>
                <div className='copyright'>
                    Copyright © 2020 Shop Pty. Ltd.
                </div>
            </div>
        </div>
    );
};

export default Footer;