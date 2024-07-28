import React from 'react';
import NavbarMobile from '../../features/Navbar/ui/NavbarMobile/NavbarMobile';
import Navbar from '../../features/Navbar/ui/Navbar/Navbar';
import styles from './Header.module.scss';
// import LangSwitcher from '../../features/LangSwitcher/LangSwitcher';

const Header = () => {
    return (
        <header className={styles.header}>
            <NavbarMobile />
            <Navbar />
            {/* <LangSwitcher /> */}
        </header>
    )
}

export default Header