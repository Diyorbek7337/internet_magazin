import React from 'react';
import './category.css'
import Logo from '../../Image/Logo.png'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import User from '../../Image/user.png'
import { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Category = () => {
    const [ search, setSearch] = useState(false);
    const [ menu, setMenu ] = useState(false)

    return (
        <div className='category'>
            {/* for mobile 768px */}
            <div className='categoryMobile-wrapper'>
                <div className='logoMenu'>
                    <p className='menuCategory' onClick={() => setMenu(!menu)}><FaBars/></p>
                    <img src={Logo} alt='Logo' className='logo2'/>
                    <input type='search' className={search?'search2':'search1 hidden'} placeholder='Search entiere store here...'></input>
                </div>
                <div className={menu?'categoryMobile': 'categoryMobile hidden'}>
                    <img src={Logo} alt='Logo' className='logoMobile'/>
                    <p className='close'onClick={() => setMenu(!menu)}><FaTimes/></p>
                    <input type='search' className={search?'search3':'search1 hidden'} placeholder='Search entiere store here...'></input>
                    {search? <p onClick={()=> setSearch(!search)}><FaTimes/></p> : <p onClick={()=> setSearch(!search)}><FaSearch/></p>}
                    <p>Laptops</p>
                    <p>Desktop PCs</p>
                    <p>Networking Devices</p>
                    <p>Printers & Scanners</p>
                    <p>Pc Parts</p>
                    <p>All Other Products</p>
                    <p>Repairs</p>
                    <p className='deal'>Our Deals</p>
                </div> 
                <div className='userSearch'>
                    {search? <p onClick={()=> setSearch(!search)}><FaTimes/></p> : <p id='searchIcon' onClick={()=> setSearch(!search)}><FaSearch/></p>}
                    <p><FaShoppingCart/></p>
                    <img className='user' src={User} alt='user'/>
                </div>      
            </div>
                {/* for desktop  */}
            <div className='category-wrapper'>
                <img src={Logo} alt='Logo'/>
                <div className='category-menu'>
                    <input type='search' className={search?'search1':'search1 hidden'} placeholder='Search entiere store here...'></input>
                    <Link to='/laptops'>
                    <p>Laptops</p>
                    </Link>
                    <Link to='/desktop'>
                    <p>Desktop PCs</p>
                    </Link>
                    <Link to='/network'>
                    <p>Networking Devices</p>
                    </Link>
                    <Link to='/prints'>
                    <p>Printers & Scanners</p>
                    </Link>
                    <Link to='/pcparts'>
                    <p>PC Parts</p>
                    </Link>
                    <Link to='/otherproduct'>
                    <p>All Other Products</p>
                    </Link>
                    <Link to='/repairs'>
                    <p>Repairs</p>
                    </Link>
                    <Link to='/laptops'>
                    <p className='deal'>Our Deals</p>
                    </Link>
                </div>
                <div className='userSearch'>
                    {search? <p onClick={()=> setSearch(!search)}><FaTimes/></p> : <p  onClick={()=> setSearch(!search)}><FaSearch/></p>}
                    {/* <input type='search' className={search?'search2':'search1 hidden'} placeholder='Search entiere store here...'></input> */}
                    <p><FaShoppingCart/></p>
                    <img className='user' src={User} alt='user'/>
                </div>
            </div>
        </div>
    );
};

export default Category;