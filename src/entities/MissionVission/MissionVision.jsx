import React from 'react';
import styles from './MissionVision.module.scss';
import { Stack } from '../../shared/ui/Stack/Stack';
import Text from '../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';


const MissionVision = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
        <Stack className={styles.container} gap='20'>
            <Stack>
                <Text
                    type='h2'
                    size='lg'
                    className={styles.heading}
                >
                    {t('Vision')}
                </Text>
                <Text className={styles.text}>
                  {t('Vision Text')}
                </Text>
            </Stack>

            <Stack>
                <Text
                    type='h2'
                    size='lg'
                    className={styles.heading}
                >
                    {t('Mission')}
                </Text>
                <Text className={styles.text}>
                  {t('Mission Text')}
                </Text>
            </Stack>
        </Stack>
    </section>
  )
}

export default MissionVision;