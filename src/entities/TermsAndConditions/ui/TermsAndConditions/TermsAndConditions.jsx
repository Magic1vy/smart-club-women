import React from 'react';
import styles from './TermsAndConditions.module.scss';
import Text from '../../../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import TermsAndConditionsList from '../TermsAndConditionsList/TermsAndConditionsList';
import { data } from '../../lib/data'
import BackButton from '../../../../features/BackButton/BackButton';
import Footer from '../../../../widgets/Footer/ui/Footer';


const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <>
    <BackButton />
    <section className={styles.sectionRights}>
      <Text 
        type='h1'
        size='lg'
        className={styles.subheading}
      >
        {t('Terms and Conditions')}
      </Text>
      <Text className={`${styles.lastUpdate} ${styles.text}`}>
        {t('TC Last updated')}
      </Text>
      <Text className={styles.text}>
        {t('TC Text 1')}
      </Text>
      <Text className={styles.text}>
        {t('TC Text 2')}
      </Text>
      <Text className={styles.text}>
        {t('TC Text 3')}
      </Text>

      {data.map((item, index)=>(
        <TermsAndConditionsList
          key={index} 
          list={t(item.list)}
          description={t(item.description)}
        />
      ))}
      <a className={styles.text} href='mailto:?subject'>smartclubcanada@gmail.com </a>

      <Text className={styles.text}>
        {t('TC Text 4')}
      </Text>
    </section>
    <Footer />
    </>
  )
}

export default TermsAndConditions;