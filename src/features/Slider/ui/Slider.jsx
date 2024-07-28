
import React, { useState, useEffect, useRef } from 'react';
import { data } from '../lib/data';
import styles from './Slider.module.scss';
import Button from '../../../shared/ui/Button/Button';
import PhotoSlider from '../../../entities/PhotoSlider/ui/PhotoSlider';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
        };

        timeoutRef.current = setTimeout(nextSlide, 4000);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [slideIndex]);

    const moveSlides = (step) => {
        setSlideIndex((prevIndex) => {
            const newIndex = prevIndex + step;
            if (newIndex < 0) {
                return data.length - 1;
            } else if (newIndex >= data.length) {
                return 0;
            } else {
                return newIndex;
            }
        });
    };

    return (
        <section className={styles.slideshow}>
            <PhotoSlider items={data} slideIndex={slideIndex} />
            <Button className={styles.prevSlideshow} onClick={() => moveSlides(-1)}>
                &#10094;
            </Button>
            <Button className={styles.nextSlideshow} onClick={() => moveSlides(1)}>
                &#10095;
            </Button>
        </section>
    );
};

export default Slider;
