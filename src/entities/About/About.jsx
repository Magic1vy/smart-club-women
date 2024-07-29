import React from 'react';
import aboutImageWebp from '../../shared/assets/images/webp/about.webp';
import aboutImage from '../../shared/assets/images/about.jpg';
import { Stack } from '../../shared/ui/Stack/Stack';
import styles from './About.module.scss';
import Text from '../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';


const About = () => {
    const { t } = useTranslation();

  return (
    <section id='about' className={styles.section}>
        <Stack 
            direction='column'
            gap='20'
            className={styles.container}
        >
            <Stack>
                <Text
                    type='h2'
                    size='lg'
                    className={styles.heading}
                >
                    {t('About Heading')}
                </Text>
                <Text className={styles.text}>
                    {t('About 1')}
                </Text>
                <Text className={styles.text}>
                    {t('About 2')}  {""}
                    <a 
                        href="https://www.instagram.com/smartclub_women/" 
                        target="_blank" 
                        rel="noreferrer"
                        className={styles.link}
                    >
                        Instagram 
                    </a>
                    {""} {t('About 3')}
                </Text>
            </Stack>
            <picture className={styles.picture}>
                <source srcSet={aboutImageWebp} type="image/webp" />
                <img 
                    src={aboutImage} 
                    alt="" 
                    loading='lazy'
                    width='auto'
                    height='auto'
                    className={styles.aboutImage}
                />
            </picture>
        </Stack>
    </section>
  )
}

export default About;