import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './contactmini.css'

const ContactMini = () => {
    return (
        <div className='contactMini'>
            <div className='contactMini-wrapper'>
                <div className='time'>
                    <p className='weekday'>Mon-Thu:<span> 9:00AM - 5.30PM</span></p>
                </div>
                <div className='location'>
                    <p>Visit our showroom in 1234 Street Adress City Address, 1234 <a href='/Contact'>Contact Us</a></p>
                </div>
                <div className='social-phone'>
                    <p>Call Us: (00) 1234 5678</p>
                    <ul className='socials'>
                        <li className='social-item'><a href='#Facebook'><FaFacebookSquare/></a></li>
                        <li className='social-item'><a href='Instagram'><FaInstagram/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactMini;