import React from 'react';
import './cardfeatures.css'
import Intel from '../../../Image/intel.png'
import RTX from '../../../Image/rtx.png'
import SSD from '../../../Image/ssd.png'
import DDR from '../../../Image/ddr4.png'

const CardFeatures = () => {
    return (
        <div className='cardFeatures'>
            <div className='cardFeatures-wrapper'>
                <div className='features-text'>
                    <h1>Features</h1>
                    <p>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
                </div>
                <div className='features-item'>
                    <div className='intel'>
                        <img src={Intel} alt=''/>
                        <p><b>Intel® Core™ i7</b> processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                    </div>
                    <div className='rtx'>
                    <img src={RTX} alt=''/>
                    <p>The new <b>GeForce® RTX SUPER™</b> Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</p>
                    </div>
                    <div className='ssd'>
                    <img src={SSD} alt=''/>
                    <p>Unleash the full potential with the latest <b>SSD technology</b>, the NVM Express. 6 times faster than traditional SATA SSD.</p>
                    </div>
                    <div className='dd4'>
                    <img src={DDR} alt=''/>
                    <p>Featuring the latest <b>10th Gen Intel® Core™</b> processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFeatures;