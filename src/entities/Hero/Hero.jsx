import React from 'react';
import logo from '../../shared/assets/images/ScwNewLogo.png'
import { Stack } from '../../shared/ui/Stack/Stack';
import styles from './Hero.module.scss';
import Text from '../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import Slider from '../../features/Slider/ui/Slider';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.section}>
            <Stack 
                justify='justifyCenter' 
                align='alignCenter'
                className={styles.textWrapper}
            >
                <img 
                    src={logo} 
                    alt="Smart Club Women Logo" 
                    className={styles.logo}
                    width='auto'
                    height='auto'
                />
                <Stack justify='justifyCenter' align='alignCenter'>
                    <Text 
                        type='h1'
                        size='lg'
                        className={styles.heroHeading}
                    >
                        {t('Hero Heading')}
                    </Text>
                    <Text size='md' className={styles.heroText}>
                        {t('Hero SubHeading 1')} <br />
                        {t('Hero SubHeading 2')}
                    </Text>
                </Stack>
            </Stack>
            <Slider />
        </section>
    )
}

export default Hero;