import React from 'react'
import Button from '../../shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.scss';

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <Button 
            clear 
            onClick={()=> navigate(-1)}
            className={styles.backButton}
        >
            <svg 
                width="50" 
                height="50" 
                viewBox="0 0 50 50" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M27.0833 32.2917L19.7917 25L27.0833 17.7083" stroke="black" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M45.8333 25C45.8333 13.4938 36.5062 4.16667 25 4.16667C13.4937 4.16667 4.16666 13.4938 4.16666 25C4.16666 36.5062 13.4937 45.8333 25 45.8333C36.5062 45.8333 45.8333 36.5062 45.8333 25Z" stroke="black" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Button>
    )
}
export default BackButton;