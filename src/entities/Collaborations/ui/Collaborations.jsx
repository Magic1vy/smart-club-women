import React from 'react';
import Text from '../../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import styles from './Collaborations.module.scss';
import { Stack } from '../../../shared/ui/Stack/Stack';
import { data } from '../lib/data';

const Collaborations = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.section}>
            <Text 
                type='h2'
                size='lg'
                className={styles.heading}
            >
                {t('Collaborations')}
            </Text>

            <Stack 
                justify='justifyBetween' 
                gap='20' 
                className={styles.wrapper}
            >
                <Stack>
                    <Text 
                        type='h3' 
                        className={styles.subheading}
                    >
                        {t('Event 1 Title')}
                    </Text>
                    <Text>
                        {t('Event 1 Text')}
                    </Text>
                </Stack>
                <Stack gap='20' className={styles.imgContainer}>
                    <img className={styles.eventImg} src={data.imageEvent1} alt="" />
                    <img className={styles.eventImg} src={data.imageEvent2} alt="" />
                </Stack>
            </Stack>

            <Stack gap='20' className={styles.container}>
                <Stack>
                    <Text 
                        type='h3' 
                        className={styles.subheading}
                    >
                        {t('Event 2 Title')}
                    </Text>
                    <Text>
                        {t('Event 2 Text')}
                    </Text>
                </Stack>
                <Stack gap='20' justify='justifyCenter' align='alignCenter' className={styles.imgContainer}>
                    <img className={styles.eventImg2} src={data.imageEvent3} alt="" />
                    <img className={styles.eventImg2} src={data.imageEvent4} alt="" />
                </Stack>
            </Stack>

            <Stack
                justify='justifyBetween' 
                align='alignCenter'
                gap='20' 
                className={styles.wrapperReverse}
            >
                <Stack>
                    <Text 
                        type='h3' 
                        className={styles.subheading}
                    >
                        {t('Event 3 Title 1')}
                    </Text>
                    <Text 
                        type='h3' 
                        className={styles.subheading}
                    >
                        {t('Event 3 Title 2')}
                    </Text>
                    <Text>
                        {t('Event 3 Text')}
                    </Text>
                </Stack>
                <Stack gap='20'>
                    <img className={styles.eventImg3} src={data.imageEvent5} alt="" />
                    <img className={styles.eventImg3} src={data.imageEvent6} alt="" />
                </Stack>
            </Stack>
        </section>
    )
}

export default Collaborations;