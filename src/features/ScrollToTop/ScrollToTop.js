import React, { useState, useEffect } from 'react';
import style from './ScrollToTop.module.scss';
import Button from '../../shared/ui/Button/Button';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    className={style.scrollToTop}
                    clear
                    ariaLabel="Scroll To Top"
                >
                    <svg 
                        width="50" 
                        height="50" 
                        viewBox="0 0 50 50" 
                        fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.7083 27.0833L25 19.7917L32.2917 27.0833" stroke="black" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M25 45.8333C36.5062 45.8333 45.8333 36.5062 45.8333 25C45.8333 13.4938 36.5062 4.16667 25 4.16667C13.4937 4.16667 4.16666 13.4938 4.16666 25C4.16666 36.5062 13.4937 45.8333 25 45.8333Z" stroke="black" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button>
            )}
        </>
    );
}

export default ScrollToTopButton;