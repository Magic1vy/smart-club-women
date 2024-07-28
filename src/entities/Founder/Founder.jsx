import React from 'react';
// import founderImageWebp from '../../shared/assets/images/webp/about.webp';
import founderImage from '../../shared/assets/images/Mila-Bogorodovskaya.jpeg';
import { Stack } from '../../shared/ui/Stack/Stack';
import styles from './Founder.module.scss';
import Text from '../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';


const Founder = () => {
    const { t } = useTranslation();

  return (
    <section id='founder' className={styles.section}>
        <Stack 
            direction='column'
            gap='20'
            className={styles.container}
        >
            <Stack className={styles.textContainer}>
                <Text
                    type='h2'
                    size='lg'
                    className={styles.heading}
                >
                    {t('Meet Founder')}
                </Text>
                <picture className={styles.mobile}>
                {/* <source srcSet={aboutImageWebp} type="image/webp" /> */}
                <img 
                    src={founderImage} 
                    alt="" 
                    loading='lazy'
                    width='auto'
                    height='auto'
                    className={styles.founderImage}
                />
            </picture>
                <Text>
                    <strong>{t('Mila Bogorodovskaya')}</strong>
                </Text>
                <Text className={styles.text}>
                    {t('Founder Text 1')}
                    <a 
                        href="https://www.instagram.com/reel/C72PPTlONwr/?igsh=ZnR5dDVjYzJkY2Vp" 
                        target="_blank" 
                        rel="noreferrer"
                        className={styles.link}
                    >
                        Smart Life SMM  
                    </a>
                    {t('Founder Text 2')}
                </Text>
            </Stack>
            <picture  className={styles.desktop}>
                {/* <source srcSet={aboutImageWebp} type="image/webp" /> */}
                <img 
                    src={founderImage} 
                    alt="" 
                    loading='lazy'
                    width='auto'
                    height='auto'
                    className={styles.founderImage}
                />
            </picture>
        </Stack>
    </section>
  )
}

export default Founder;