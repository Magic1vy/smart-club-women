import React from 'react';
import styles from './PhotoSlider.module.scss';

const Slides = ({ items, slideIndex }) => {
    return (
        <>
            {items.map((item, index) => (
                <img
                    key={index}
                    className={styles.mySlides}
                    src={item.img}
                    alt={`Slide ${index}`}
                    style={{ display: slideIndex === index ? 'block' : 'none' }}
                />
            ))}
        </>
    );
};

export default Slides;