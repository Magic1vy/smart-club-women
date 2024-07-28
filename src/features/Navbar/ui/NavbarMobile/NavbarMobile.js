import React, { useState } from 'react';
import Button from '../../../../shared/ui/Button/Button';
import style from './NavbarMobile.module.scss';
import { HashLink } from 'react-router-hash-link';
import { navigation } from '../../lib/data';
import { useTranslation } from 'react-i18next';
import useOverflowHidden from '../../../../shared/hooks/useOverflowHidden'
import LangSwitcher from '../../../LangSwitcher/LangSwitcher';

const NavbarMobile = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    
    useOverflowHidden(isOpen);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav 
            className={style.navbarMobile}
            aria-label="Main Navigation"
        >
            <button
                className={`${style.hamburger} ${isOpen ? style.open : ''}`}
                onClick={toggleMenu}
                type='button'
                aria-label="Open Hamburger Menu"
                aria-expanded={isOpen}
            >
                <div className={style.lineTop}></div>
                <div className={style.lineMiddle}></div>
                <div className={style.lineBottom}></div>
            </button>
            {isOpen && (
                <ul className={style.menu}>
                    {Object.values(navigation).map(({ text, path }) => (
                        <li key={path} onClick={closeMenu}>
                            <HashLink 
                                smooth to={`#${path}`} 
                                className={style.sectionHashLink}
                            >
                                <Button navigation text={t(text)} />
                            </HashLink>
                        </li>
                    ))}
                    <LangSwitcher />
                </ul>
            )}
        </nav>
    );
};

export default NavbarMobile;