import React from 'react';
import { Container } from 'react-bootstrap';
import './shopping.css'
import Table from 'react-bootstrap/Table'
import ShoppingImage from '../../Image/shoppping.png'
import Shoppings from '../../Image/shopping1.png'
import { useState } from 'react'
import { FaAngleUp } from "react-icons/fa";

const Shopping = () => {
    const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(1);
    const [price, setPrice] = useState(4350)
    const [price1, setPrice1] = useState(4350)

    const inc = () => {
        setCount(count + 1)
        setPrice(price + 4350)
    }
    const dec = () => {
        if (count > 1) {
            setCount(count - 1)
            setPrice(price - 4350)
        }
    }
    const inc1 = () => {
        setCount1(count1 + 1)
        setPrice1(price1 + 4350)
    }
    const dec1 = () => {
        if (count1 > 1) {
            setCount1(count1 - 1)
            setPrice1(price1 - 4350)
        }
    }

    return (
        <Container>
            <div className='shopping'>
                <div className='shopping-wrapper'>
                    <h1>Shopping Cart</h1>
                    <div className='shopping-box'>
                        <div className='shoppingTable'>

                            <div className='table'>
                                <div className='tableHead'>
                                    <div className='th1'>
                                        Item
                                    </div>
                                    <div className='th2'>
                                        Price
                                    </div>
                                    <div className='th3'>
                                        Qty
                                    </div>
                                    <div className='th4'>
                                        Subtotal
                                    </div>
                                    <div className='th5'></div>
                                </div>
                                <div className='tableBody'>
                                    <div className='th1' id='tb1'>
                                        <img src={ShoppingImage} alt='' />
                                        <p>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
                                    </div>
                                    <div className='th2' id='tb2'>
                                        <b>$4350</b>
                                    </div>
                                    <div className='th3' id='tb3'>
                                        <div className='count1'>
                                            <span>{count}</span>
                                            <div className='button-wrapper1'>
                                                <button onClick={inc}><FaAngleUp /></button>
                                                <button onClick={dec}><FaAngleUp /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='th4' id='tb4'>
                                        <b>${price}</b>
                                    </div>
                                    <div className='th5'></div>
                                </div>
                                <div className='tableBody'>
                                    <div className='th1' id='tb1'>
                                        <img src={ShoppingImage} alt='' />
                                        <p>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
                                    </div>
                                    <div className='th2' id='tb2'>
                                        <b>$4350</b>
                                    </div>
                                    <div className='th3' id='tb3'>
                                        <div className='count1'>
                                            <span>{count1}</span>
                                            <div className='button-wrapper1'>
                                                <button onClick={inc1}><FaAngleUp /></button>
                                                <button onClick={dec1}><FaAngleUp /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='th4' id='tb4'>
                                        <b>${price1}</b>
                                    </div>
                                    <div className='th5'></div>
                                </div>
                            </div>
                        </div>
                        <div className='summary'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Shopping;









                                        // <div className='count1'>
                                    //     <span>{count}</span>
                                    //     <div className='button-wrapper1'>
                                    //         <button onClick={inc}><FaAngleUp /></button>
                                    //         <button onClick={dec}><FaAngleUp /></button>
                                    //     </div>
                                    // </div> 