import React from 'react';
import styles from './PrivacyPolicy.module.scss'
import Text from '../../../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { data } from '../../lib/data';
import PrivacyPolicyList from '../PrivacyPolicyList/PrivacyPolicyList';
import BackButton from '../../../../features/BackButton/BackButton';
import Footer from '../../../../widgets/Footer/ui/Footer';


const PrivacyPolicy = () => {
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
        {t('Privacy Policy')}
      </Text>
      <Text className={`${styles.lastUpdate} ${styles.text}`}>
        {t('PR Last updated')}
      </Text>
      <Text className={styles.text}>
        {t('Privacy Policy Text 1')}
      </Text>
      <Text className={styles.text}>
        {t('Privacy Policy Text 2')}
      </Text>

      {data.map((item, index) => (
        <PrivacyPolicyList 
          key={index} 
          title={t(item.title)}
          text={t(item.text)}
          list={item.list.map(list => t(list))} 
          />
      ))}
      <Text>
        Smart Club Women <br />
        Email: 
        <a href="mailto:smartclubcanada@gmail.com">
          smartclubcanada@gmail.com
        </a>
      </Text>
    </section>
    <Footer />
    </>
  )
}

export default PrivacyPolicy;