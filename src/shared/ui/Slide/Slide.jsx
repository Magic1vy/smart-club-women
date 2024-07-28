import React from 'react';
import styles from './Slide.module.scss';

const Slide = ({ children, isActive }) => {
    return (
        <div className={styles.slide} style={{ display: isActive ? 'block' : 'none' }}>
            {children}
        </div>
    );
};

export default Slide;
