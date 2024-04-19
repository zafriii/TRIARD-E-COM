import React, { useState } from "react";
import './myimage.css'

import ReactImageMagnify from 'react-image-magnify';

 function MyImage({ imgs = [{ url: "" }] }) {

    const [mainImage, setMainImage] = useState(imgs[0]);


  return (
    <>

    <div className="myimage-container">
     
      <ReactImageMagnify {...{
    smallImage: {
        alt: mainImage.filename,
        isFluidWidth: true,
        src: mainImage.url,
          
    },
    largeImage: {
        src: mainImage.url,
        width: 1500,
        height: 1800,
       
    },
    
    enlargedImagePosition:'over'


    }} />
  
    </div> 
    
    </>
  )
}

export default MyImage
