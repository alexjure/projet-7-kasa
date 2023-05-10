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
        <>
            {slides.map((l, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        <div className='carte-image' style={{ backgroundImage: `url(${l})` }}>
                            <button onClick={nextSlide} style={{ display: display }}>Next</button>
                            <button onClick={prevSlide} style={{ display: display }}>Prev</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
};

export default Carrousel;

