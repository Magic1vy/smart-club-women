import React from 'react';
import { Stack } from '../../../shared/ui/Stack/Stack';
import logo from '../../../shared/assets/images/ScwNewLogo.png';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../../shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import Text from '../../../shared/ui/Text/Text';
import { data } from '../lib/data';


const Footer = () => {
    const { t } = useTranslation();

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <footer className={styles.footer}>
            <Stack >
                <Stack gap='30' className={styles.footerContainer}>
                    <Stack 
                        align='alignCenter'
                        justify='justifyCenter'
                        gap='20'
                        direction='row'
                        className={styles.footerWrapper}
                    >
                        <Link to='/'>
                            <img 
                                src={logo} 
                                alt="Smart Club Women Logo" 
                                className={styles.logo}
                                width='auto'
                                height='auto'
                            />
                        </Link>
                        <Stack justify='justifyBetween' gap='10'>
                            <Link to="/privacy-policy">
                                <Button clear >
                                    {t('Privacy Policy')}
                                </Button>
                            </Link>
                            <Link to="/terms-and-conditions">
                                <Button clear>
                                    {t('Terms and Conditions')}
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>

                    <Stack 
                        justify='justifyCenter' 
                        align='alignCenter' 
                        gap='20'
                        className={styles.socialMedia}
                    >
                        <Text className={styles.text} size='md'>
                            {t('Follow us')}
                        </Text>
                        <Stack direction='row' gap='20'>
                            {data.map(({img, title, link}) => (
                                <a 
                                    key={title}  
                                    href={link} 
                                    title={title}
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    <img 
                                        src={img} 
                                        alt={title} 
                                        width='auto'
                                        height='auto'
                                    />
                                </a>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Text className={styles.rights}>
                © 
                <span className={styles.span}>
                    {getCurrentYear()}
                </span>
                {t('Rights')}
                <a 
                    href='https://valeriia-code.com/' 
                    target="_blank" 
                    rel="noreferrer"
                    className={styles.link}
                >
                    Valeriia Code
                </a>
            </Text>
        </footer>
    )
}

export default Footer;