import React from 'react';
import './laptopMain.css';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa"
import { FaTh } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { RiHeartLine } from "react-icons/ri";
import Filters from '../../../Image/filters.png';
import BrandGroup from '../../../Image/brands-gr.png';
import Stul from '../../../Image/stul.png';
import Stars from '../../../Image/Stars.png';
import MsiLaptop from '../../../Image/msiLaptop.png';
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react'
import { RiFilterLine } from 'react-icons/ri'


const LaptopMain = () => {

    const [productStyle, setProductStyle] = useState('row')
    const [posts, setPosts] = useState([
        {
            id: 1,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 2,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 3,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 4,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 5,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 6,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 7,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 8,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 9,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 10,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 11,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 12,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 13,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 14,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 15,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 16,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 17,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 18,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 19,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        },
        {
            id: 20,
            stock: 'in stock',
            image: MsiLaptop,
            image1: Stars,
            inform: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
            balance: '$499.00',
            balance1: '$499.00'
        }
    ])
    const [filter, setFilter] = useState(false)

    const rowStyle = (
        // 
        <div className='products-box'>
            <div className='product-item1'>
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
    const columnStyle = (
        <div className='product-box-container'>
            <Link to='/card'>
                <div className='product-item-box'>
                    <div className='image-box'>
                        <img className='planshet' src={MsiLaptop} alt='CompWhite' />
                        <img className='stars' src={Stars} alt='stars' />
                    </div>
                    <div className='information-laptop'>
                        <p>SKU D5515AI</p>
                        <h4>MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop</h4>
                        <span className='balance-skidka'>$499.00</span>
                        <span className='balance'>$499.00</span>
                        <p className='addToCard'><FaShoppingCart /> Add to Cart</p>
                    </div>
                    <div className='laptop-features'>
                        <p><span>CPU</span><span className='NA'>N/A</span></p>
                        <p><span>Featured</span><span className='NA'>N/A</span></p>
                        <p><span>I/O Ports</span><span className='NA'>N/A</span></p>
                    </div>
                    <div className='stock'>
                        <p className='stocks'><FaCheckCircle /> in stock</p>
                        <div className='message-item'>
                            <span><FaRegEnvelope /></span>
                            <span><FaRegChartBar /></span>
                            <span><RiHeartLine /></span>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/card'>
                <div className='product-item-box'>
                    <div className='image-box'>
                        <img className='planshet' src={MsiLaptop} alt='CompWhite' />
                        <img className='stars' src={Stars} alt='stars' />
                    </div>
                    <div className='information-laptop'>
                        <p>SKU D5515AI</p>
                        <h4>MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop</h4>
                        <span className='balance-skidka'>$499.00</span>
                        <span className='balance'>$499.00</span>
                        <p className='addToCard'><FaShoppingCart /> Add to Cart</p>
                    </div>
                    <div className='laptop-features'>
                        <p><span>CPU</span><span className='NA'>N/A</span></p>
                        <p><span>Featured</span><span className='NA'>N/A</span></p>
                        <p><span>I/O Ports</span><span className='NA'>N/A</span></p>
                    </div>
                    <div className='stock'>
                        <p className='stocks'><FaCheckCircle /> in stock</p>
                        <div className='message-item'>
                            <span><FaRegEnvelope /></span>
                            <span><FaRegChartBar /></span>
                            <span><RiHeartLine /></span>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/card'>
                <div className='product-item-box'>
                    <div className='image-box'>
                        <img className='planshet' src={MsiLaptop} alt='CompWhite' />
                        <img className='stars' src={Stars} alt='stars' />
                    </div>
                    <div className='information-laptop'>
                        <p>SKU D5515AI</p>
                        <h4>MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop</h4>
                        <span className='balance-skidka'>$499.00</span>
                        <span className='balance'>$499.00</span>
                        <p className='addToCard'><FaShoppingCart /> Add to Cart</p>
                    </div>
                    <div className='laptop-features'>
                        <p><span>CPU</span><span className='NA'>N/A</span></p>
                        <p><span>Featured</span><span className='NA'>N/A</span></p>
                        <p><span>I/O Ports</span><span className='NA'>N/A</span></p>
                    </div>
                    <div className='stock'>
                        <p className='stocks'><FaCheckCircle /> in stock</p>
                        <div className='message-item'>
                            <span><FaRegEnvelope /></span>
                            <span><FaRegChartBar /></span>
                            <span><RiHeartLine /></span>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/card'>
                <div className='product-item-box'>
                    <div className='image-box'>
                        <img className='planshet' src={MsiLaptop} alt='CompWhite' />
                        <img className='stars' src={Stars} alt='stars' />
                    </div>
                    <div className='information-laptop'>
                        <p>SKU D5515AI</p>
                        <h4>MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop</h4>
                        <span className='balance-skidka'>$499.00</span>
                        <span className='balance'>$499.00</span>
                        <p className='addToCard'><FaShoppingCart /> Add to Cart</p>
                    </div>
                    <div className='laptop-features'>
                        <p><span>CPU</span><span className='NA'>N/A</span></p>
                        <p><span>Featured</span><span className='NA'>N/A</span></p>
                        <p><span>I/O Ports</span><span className='NA'>N/A</span></p>
                    </div>
                    <div className='stock'>
                        <p className='stocks'><FaCheckCircle /> in stock</p>
                        <div className='message-item'>
                            <span><FaRegEnvelope /></span>
                            <span><FaRegChartBar /></span>
                            <span><RiHeartLine /></span>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/card'>
                <div className='product-item-box'>
                    <div className='image-box'>
                        <img className='planshet' src={MsiLaptop} alt='CompWhite' />
                        <img className='stars' src={Stars} alt='stars' />
                    </div>
                    <div className='information-laptop'>
                        <p>SKU D5515AI</p>
                        <h4>MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop</h4>
                        <span className='balance-skidka'>$499.00</span>
                        <span className='balance'>$499.00</span>
                        <p className='addToCard'><FaShoppingCart /> Add to Cart</p>
                    </div>
                    <div className='laptop-features'>
                        <p><span>CPU</span><span className='NA'>N/A</span></p>
                        <p><span>Featured</span><span className='NA'>N/A</span></p>
                        <p><span>I/O Ports</span><span className='NA'>N/A</span></p>
                    </div>
                    <div className='stock'>
                        <p className='stocks'><FaCheckCircle /> in stock</p>
                        <div className='message-item'>
                            <span><FaRegEnvelope /></span>
                            <span><FaRegChartBar /></span>
                            <span><RiHeartLine /></span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )

    const isRowStyle = productStyle === 'row' ? rowStyle : ''
    const isColumnStyle = productStyle === 'column' ? columnStyle : ''

    return (
        <div className='laptopMain'>
            {/* filter for mobile */}
            <div className={filter ? 'filterMobile.active' : 'filterMobile'}>
                aaaaa
            </div>
            <div className='laptop-wrapper'>


                <div className='filter-box'>
                    <Link to='/'>
                        <button><FaAngleLeft /> Back</button>
                    </Link>

                    <div className='filter-container'>
                        <img src={Filters} alt='' className='filters' />
                        <div className='brand-container'>
                            <div className='brand-box'>
                                <h2>Brands</h2>
                                <button>All Brands</button>
                            </div>
                            <div className='brands-group'>
                                <img src={BrandGroup} alt='' />
                            </div>
                        </div>
                        <div className='compare'>
                            <h2>Compare products</h2>
                            <p>You have no items to compare.</p>
                        </div>
                        <div className='wish'>
                            <h2>My Wish List</h2>
                            <p>You have no items in your wish list.</p>
                        </div>
                        <img src={Stul} alt='' className='stul' id='stul' />
                    </div>
                </div>
                <div className='product-container'>
                    <div className='sort'>
                        <p className='sortP'>Items 1-35 of 61</p>
                        <RiFilterLine className='filter-icon' onClick={() => setFilter(!filter)} />
                        <div className='sort-wrapper'>
                            <div className='sort-item'>
                                <p>Sort by:
                                    <select>
                                        <option>All</option>
                                        <option>New</option>
                                        <option>Expensive</option>
                                        <option>Cheapest</option>
                                    </select>
                                </p>
                            </div>
                            <div className='sort-item1'>
                                <p>Show:
                                    <select>
                                        <option>35 per page</option>
                                        <option>25per page</option>
                                        <option>15 per page</option>
                                    </select>
                                </p>
                            </div>
                            <FaTh className={productStyle === 'row' ? 'fath active' : 'fath'} onClick={() => setProductStyle('row')} />
                            <FaAlignLeft className={productStyle === 'column' ? 'alignLeft active' : 'alignLeft'} onClick={() => setProductStyle('column')} />
                        </div>
                    </div>
                    {/* For Fath Menu */}

                    {isColumnStyle}
                    {isRowStyle}




                </div>
            </div>
        </div >
    );
};

export default LaptopMain;