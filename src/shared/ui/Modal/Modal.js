import React from 'react';
import styles from './Modal.module.scss';
import { Stack } from '../Stack/Stack';

const Modal = ({ changeOpen, children }) => {
    const closeModal = (e) => {
        if (e.target.classList.contains(styles.overlay)) {
            changeOpen(false);
        }
    };

    return (
        <div className={styles.modal} role="dialog">
            <div 
                className={styles.overlay} 
                onClick={closeModal}
                data-overlay="true"
                aria-label="Close Modal Window"
            >
                <Stack
                    justify="justifyСenter"
                    align="alignСenter"
                    className={styles.modalContentWrapper}
                >
                    {children}
                </Stack>
            </div>
        </div>
    );
};

export default Modal;