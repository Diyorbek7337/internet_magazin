import React from 'react';
import LaptopBanner from './laptopbanner/LaptopBanner';
import LaptopMain from './laptop-main/LaptopMain'
import './laptop.css'

const Laptop = () => {
    return (
        <div className='laptops'>
           <LaptopBanner/>
           <LaptopMain/>
        </div>
    );
};

export default Laptop;