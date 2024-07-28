import React from 'react';
import Button from '../../../../shared/ui/Button/Button';
import style from './Navbar.module.scss';
import { HashLink } from 'react-router-hash-link'; 
import { navigation } from '../../lib/data';
import { useTranslation } from 'react-i18next';
import LangSwitcher from '../../../LangSwitcher/LangSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav aria-label="Main navigation">
      <ul className={style.navigation}>
        {Object.values(navigation).map(({ text, path }) => (
          <li key={path}>
            <HashLink smooth to={`#${path}`}>
              <Button 
                navigation
                text={t(text)} 
                className={style.navigationButton}
              />
            </HashLink>
          </li>
        ))}
        <LangSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;