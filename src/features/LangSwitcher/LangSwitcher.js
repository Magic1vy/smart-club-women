import React, { useEffect, useState } from 'react';
import Button from '../../shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import style from './LangSwitcher.module.scss'

const LangSwitcher = ({ onLanguageChange }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = () => {
    const newLanguage = language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    if (onLanguageChange) {
      onLanguageChange(); 
    }
  };

  return (
      <Button 
        navigation
        text={t('Language')} 
        onClick={changeLanguage} 
        className={style.button}
        ariaLabel='Lang Switcher'
      />
  );
};

export default LangSwitcher;
