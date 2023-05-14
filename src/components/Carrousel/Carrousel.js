import './Carrousel.css'
import React, { useState } from 'react';

const Carrousel = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const lenght = slides.length;

    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? lenght - 1 : current - 1)
    }


    if (slides.length <= 0) {
        return null;
    }

    const display = slides.length <= 1 ? 'none' : 'block';

    return (
        <div className='carrousel'>
            {slides.map((l, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        <div className='carte-image-carrousel' style={{ backgroundImage: `url(${l})` }}>
                            <span onClick={prevSlide} style={{ display: display }} className='prev'><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
                            <span onClick={nextSlide} style={{ display: display }} className='next'><i class="fa-sharp fa-solid fa-chevron-right"></i></span>

                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Carrousel;

/*
<div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        <div className='carte-image' style={{ backgroundImage: `url(${l})` }}>
                            <button onClick={nextSlide} style={{ display: display }}>Next</button>
                            <button onClick={prevSlide} style={{ display: display }}>Prev</button>
                        </div>
                    </div>

*/

