import React, { useState, useEffect } from 'react';
import Slideimg from './Slideimg';
import './Slider.css';


function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === Slideimg.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Slideimg.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // Change the interval time (in milliseconds) as needed

        return () => {
            clearInterval(intervalId); // Cleanup function to clear the interval on component unmount
        };
    }, [currentIndex]); // Run this effect whenever currentIndex changes

    return (
        <>
        <h2 className='new'>New Arraival</h2>
        <div className="popular">

            <div className="popular-container">
                <div className="newarr">New</div>
                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>
                {Slideimg.map((curElem, index) => {
                    const { id, image } = curElem;
                    return (
                        <div
                            className={`popular-card-container fade ${
                                index === currentIndex ? 'slide active' : 'slide'
                            }`}
                            key={id}
                        >
                            <div className="popular-image-container fade">
                                <img src={image} alt={`Slide ${index}`} />
                            </div>

                            <h2 className='typing-text'>New Arraival! </h2>
                        </div>
                    );
                })}
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
        </>
    );
}

export default Slider;


