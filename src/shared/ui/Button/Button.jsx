import React from 'react';
import styles from './Button.module.scss';
import { getStyle } from '../../helper/getStyle';

const Button = ({ text, children, onClick, active, navigation, clear, className }) => {
    const mode = {
        [styles.active]: active,
        [styles.navigation]: navigation,
        [styles.clear]: clear,
    };
    const additional = [
        className
    ];
    return (
        <button
            className={getStyle(styles.button, mode, additional, [])}
            onClick={onClick}
        >
            {text || children}
        </button>
    )
}

export default Button;