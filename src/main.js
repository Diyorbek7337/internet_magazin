import React from 'react';
import ImageBanner from './Components/imageBanner/ImageBanner';
import NewProduct from './Components/New-Product/NewProduct';
import Msi from './Components/MSI-Laptops/Msi';
import Desktop from './Components/Desktop/Desktop';
import Gaming from './Components/Gaming-Monitors/Gaming'
import Brand from './Components/brands/Brand';
import Blogs from './Components/blogs/Blogs';
import Comment from './Components/comment/Comment'


const main = () => {
    return (
        <div className='main'>
          <ImageBanner />
          <NewProduct />
          <Msi/>
          <Desktop/>
          <Gaming/>
          <Brand/>
          <Blogs/>
          <Comment/>
        </div>
    );
};

export default main;