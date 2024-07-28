import React from 'react';
import styles from './Services.module.scss';
import { data } from '../lib/data';
import { Stack } from '../../../shared/ui/Stack/Stack';
import Text from '../../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import Button from '../../../shared/ui/Button/Button';
import imgService from '../../../shared/assets/images/SMM.png'
import LetsDo from '../../../features/LetsDo/LetsDo';
import useModal from '../../../shared/hooks/useModal';
import useOverflowHidden from '../../../shared/hooks/useOverflowHidden';
import Modal from '../../../shared/ui/Modal/Modal';

const Services = () => {
  const { t } = useTranslation();

  const { isOpen, changeOpen } = useModal();
  useOverflowHidden(isOpen);

  const handleOpenModal = () => {
      changeOpen();
  };

  return (
    <section id='services' className={styles.section}>
      <Stack>
      <Text 
        type='h2'
        className={styles.subheading}
        size='lg'
      >
            {t("Our Services")}
          </Text>
        <Stack>
          <Text className={styles.text}>
            {t('Services Text')}
          </Text>
          <ul className={styles.list}>
            {data.map((list, index) => (
              <Text 
                key={index}
                type='li' 
                className={styles.text}
              >
                {t(list)}
              </Text>
            ))}
          </ul>
          <Text className={styles.text}>
            {t('Services CTA')}
          </Text>

        </Stack>
      <Button className={styles.btn} onClick={handleOpenModal}>
        {t('Services Btn')}
      </Button>
      </Stack>
      <img 
        src={imgService} 
        alt="Smart Club Women Services" 
        className={styles.imgService}
        width='auto' 
        height='auto' 
      />

      {isOpen && (
        <Modal changeOpen={changeOpen}>
            <LetsDo changeOpen={changeOpen} />
        </Modal>
    )}
    </section>
  )
}

export default Services;