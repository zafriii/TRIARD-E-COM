import React, { useState } from "react";
import './myimage.css'

import ReactImageMagnify from 'react-image-magnify';

 function MyImage({ imgs = [{ url: "" }] }) {

    const [mainImage, setMainImage] = useState(imgs[0]);


  return (
    <>

    <div className="myimage-container">

    {/* <div className="four-images">
        {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div> */}

      {/* <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} className="image"/>
      </div> */}

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