import React from 'react';
import { Container } from 'react-bootstrap';
import './contactus.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const ContactUs = () => {
    return (

        <Container fluid>
            <div className='contactUs'>
                <div className='contactUs-wrapper'>
                    <div className='contacts'>
                        <h1>Contact Us</h1>
                        <p className='contact-paragraph'>We love hearing from you, our Shop customers.<br></br> Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
                        
                            <div className='contactInputs'>
                                <div className='inputs' id='nameInput'>
                                    <label for='name'>Your Name*</label>
                                    <input type='text' placeholder='Your Name' id='name' />
                                </div>
                                <div className='inputs' id='fnameInput'>
                                    <label for='email'>Your Email*</label>
                                    <input type='text' placeholder='Your Email' id='email' />
                                </div>
                                
                            </div>
                            <div className='inputs3'>
                                    <label for='name'>Your Phone Number*</label>
                                    <input type='text' placeholder='Your Phone Number' id='pnumber' />
                            </div>
                            <label for='textarea'>What’s on your mind?*</label>
                            <textarea type='text' placeholder='Jot us a note and we’ll get back to you as quickly as possible' id='textarea'></textarea>
                            <button type='button' className='buttons'>Submit</button>
                        
                    </div>
                    <div className='address'>
                        <div className='addres'>
                            <FaMapMarkerAlt />
                            <h2>Address:</h2>
                            <p>1234 Street Adress City Address, 1234</p>
                        </div>
                        <div className='addres'>
                            <AiOutlineWhatsApp />
                            <h2>Phone:</h2>
                            <p>(00)1234 5678</p>
                        </div>
                        <div className='addres'>
                            <AiOutlineLeftCircle />
                            <h2>We are open:</h2>
                            <p>Monday - Thursday: 9:00 AM - 5:30 PM
                                Friday 9:00 AM - 6:00 PM
                                Saturday: 11:00 AM - 5:00 PM</p>
                        </div>
                        <div className='addres'>
                            <SiGmail />
                            <h2>Email:</h2>
                            <p>shop@email.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>


    );
};

export default ContactUs;