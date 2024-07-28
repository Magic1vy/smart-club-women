import React from 'react';
import { data } from '../lib/data';
import { Stack } from '../../../shared/ui/Stack/Stack';
import styles from './InstagramStatisctics.module.scss';
import Text from '../../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import Button from '../../../shared/ui/Button/Button';


const InstagramStatisctics = ({ changeOpen }) => {
  const { t } = useTranslation();

  const handleCloseModal = () => {
    changeOpen(false);
  };

  return (
    <Stack>
      <Button
        navigation
        className={styles.closeBtn}
        onClick={handleCloseModal}
        aria-label="Close Modal Window"
      >
        <svg
          className={styles.closeBtnSvg}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.08095 7.26418L14.5335 0.71248L13.8318 0L7.37925 6.5517L1.16911 0.246094L0.467412 0.958573L6.67756 7.26418L0 14.0444L0.701693 14.7569L7.37925 7.97666L14.2992 15.003L15.0009 14.2905L8.08095 7.26418Z"
            fill="black"
          />
        </svg>
      </Button>
      <Text
        type='h2'
        size='lg'
        className={styles.heading}
      >
        {t('Statistic')}
      </Text>
      <div className={styles.wrapper} >
        {data.map((item) => (
            <img 
            key={item.id}
            src={item.image} 
            alt='Instagram statistic' 
            className={styles.imgStatistic}
            />
          ))}
          </div>
    </Stack>
  )
}

export default InstagramStatisctics;