import React from 'react';
import CardCore from './cardCorei7/CardCore';
import CardFeatures from './cardFeatures/CardFeatures';
import CardNav from './cardNav/CardNav';
import CardOperator from './cardOperator/CardOperator';

const Card = () => {
    return (
        <div className='Card'>
            <CardNav/>
            <CardCore/>
            <CardOperator/>
            <CardFeatures/>
        </div>
    );
};

export default Card;