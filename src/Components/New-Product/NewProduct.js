import React from 'react';
import './newProduct.css'
import {  useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import Planshet from '../../Image/planshet.png'
import Stars from '../../Image/Stars.png'
import CompWhite from '../../Image/comp.png'
import CompBlack from '../../Image/comp-black.png'
import Laptop from '../../Image/laptop.png'
import ReklamaBanner from '../../Image/reklama-banner.png'
import Charlie from '../../Image/charlie.png'
import { Link } from 'react-router-dom';
const NewProduct = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            stock: 'in stock',
            image: Planshet,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 2,
            stock: 'in stock',
            image: CompWhite,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 3,
            stock: 'in stock',
            image: CompBlack,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 4,
            stock: 'in stock',
            image: Laptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 5,
            stock: 'in stock',
            image: CompBlack,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 6,
            stock: 'in stock',
            image: CompBlack,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        }
    ])

    const rowStyle = (
        // 
        <div className='products'>
            <div className='product-item'>
                {posts.map(post => {
                    return (
                        <Link to='/card' key={post.id} className='pro'>
                            <p><FaCheckCircle />{post.stock}</p>
                            <img className='planshet' src={post.image} alt='CompWhite' />
                            <img className='stars' src={post.image1} alt='stars' />
                            <p className='text-item'>{post.inform}</p>
                            <p className='balance-skidka'>{post.balance}</p>
                            <p className='balance'>{post.balance1}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
    return (
        <div className='newProduct'>
            <div className='newProduct-wrapper'>
                <div className='text-product'>
                    <h1>New Products</h1>
                    <a href='#'>See All New Products</a>
                </div>
                <div className='products'>
                    <div className='product-item' id='planshet'>
                        <Link to='/card'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet1' src={Planshet} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='/card'>
                            <p className='check'><RiWhatsappFill /> check availability</p>
                            <img className='planshet' src={CompWhite} alt='CompWhite' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='/card'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={CompBlack} alt='CompBlack' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='/card'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Laptop} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='/card'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={CompBlack} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item' id='compBlacks'>
                        <Link to='/card'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={CompBlack} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                </div>
                <img className='reklama' src={ReklamaBanner} alt='reklama' />
            </div>
            <div className='CustomBuilds-wrapper'>
                <div className='products'>
                    <div className='product-item-1'>
                        <Link to='#'>
                            <h2>Custome Builds</h2>
                            <p>See All New Products</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Charlie} alt='CompWhite' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={CompBlack} alt='CompBlack' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={Laptop} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={CompBlack} alt='planshet' />
                            <img className='stars' src={Stars} alt='stars' />
                            <p className='text-item'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                            <p className='balance-skidka'>$499.00</p>
                            <p className='balance'>$499.00</p>
                        </Link>
                    </div>
                    <div className='product-item'>
                        <Link to='#'>
                            <p><FaCheckCircle /> in stock</p>
                            <img className='planshet' src={CompBlack} alt='planshet' />
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

export default NewProduct;