import React from 'react';
import './cardnav.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleUp } from "react-icons/fa";
import Paypal1 from '../../../Image/paypal1.png'
import AboutProduct from './cardAboutDesignSpecs/AboutProduct';
import CardDetail from './cardDetail/CardDetail';
import CardSpecs from './cardSpecs/CardSpecs';

const CardNav = () => {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(500)
    const [ about, setAbout ] = useState('about')
    const aboutProduct = (
        <AboutProduct/>
    )
    const isAboutStyle = about === 'about'? aboutProduct: '';

    const detailProduct = (
        <CardDetail/>
    )
    const isDetailStyle = about === 'detail'? detailProduct: '';
    
    const specsProduct = (
        <CardSpecs/>
    )
    const isSpecsStyle = about === 'specs'? specsProduct: '';

    const inc = () => {
        setCount(count + 1)
        setPrice(price + 500)
    }
    const dec = () => {
        if (count > 1) {
            setCount(count - 1)
            setPrice(price - 500)
        }
    }


    return (
        <div className='CardNav'>
            <div className='cardNav-wrapper'>
                <div className='cardMenu'>
                        <h3 className={about === 'about' ? 'cardMenuAbout.active':'cardMenuAbout'} onClick={() => setAbout('about')}>About Product</h3>
                        <h3 className={about === 'detail' ? 'cardMenuDetail active': 'cardMenuDetail'} onClick={() => setAbout('detail')}>Details</h3>
                        <h3 className={about === 'specs' ? 'cardMenuSpecs active' : 'cardMenuSpecs'} onClick={() => setAbout('specs')}>Specs</h3>
                    
                </div>
                <div className='pays'>
                    <p>On Sale from <b>${price}</b></p>
                    <div className='count'>
                        <span>{count}</span>
                        <div className='button-wrapper'>
                            <button onClick={inc}><FaAngleUp /></button>
                            <button onClick={dec}><FaAngleUp /></button>
                        </div>
                    </div>
                    <div className='addtocard'>
                        <Link to='#'>
                            <h3>Add to Cart</h3>
                        </Link>
                    </div>
                    <div className='addtocard1'>
                        <Link to='#'>
                            <img src={Paypal1} alt=''/>
                        </Link>
                    </div>
                </div>
            </div>
            <hr></hr>
            {isAboutStyle}
            {isDetailStyle}
            {isSpecsStyle}
        </div>
    );
};

export default CardNav;