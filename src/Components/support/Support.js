import React from 'react';
import './support.css'
import Support1 from '../../Image/Support.png'
import Account from '../../Image/Account.png'
import Saving from '../../Image/Saving.png'
const Support = () => {
    return (
        <div className='support'>
            <div className='support-wrapper'>
                <div className='support-box'>
                    <div className='support-item'>
                        <img src={Support1} alt=''/>
                        <h1>Product Support</h1>
                        <p>Up to 3 years on-site warranty available for your peace of mind.</p>  
                    </div>
                    <div className='support-item'>
                        <img src={Account} alt=''/>
                        <h1>Personal Account</h1>
                        <p>With big discounts, free delivery and a dedicated support specialist.</p>  
                    </div>
                    <div className='support-item'>
                        <img src={Saving} alt=''/>
                        <h1>Amazing Savings</h1>
                        <p>Up to 70% off new Products, you can be sure of the best price.</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;