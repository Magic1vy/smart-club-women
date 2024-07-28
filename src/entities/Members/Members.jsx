import React from 'react';
import membersImageWebp from '../../shared/assets/images/webp/members.webp';
import membersImage from '../../shared/assets/images/members.jpg';
import { Stack } from '../../shared/ui/Stack/Stack';
import styles from './Members.module.scss';
import Text from '../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import Button from '../../shared/ui/Button/Button';
import useOverflowHidden from '../../shared/hooks/useOverflowHidden';
import Modal from '../../shared/ui/Modal/Modal';
import ContactFormMember from '../../features/ContactFormMember/ContactFormMember';
import useModal from '../../shared/hooks/useModal';


const Members = () => {
    const { t } = useTranslation();
    const { isOpen, changeOpen } = useModal();

    useOverflowHidden(isOpen);

    const handleOpenModal = () => {
        changeOpen();
    };

  return (
    <section id='members' className={styles.section}>
        <Stack 
            direction='column'
            gap='20'
            className={styles.container}
        >
            <picture className={styles.picture}>
                <source srcSet={membersImageWebp} type="image/webp" />
                <img 
                    src={membersImage} 
                    alt="" 
                    loading='lazy'
                    width='auto'
                    height='auto'
                    className={styles.membersImage}
                />
            </picture>
            <Stack className={styles.textContainer}>
                <Text
                    type='h2'
                    size='lg'
                    className={styles.heading}
                >
                    {t('Members Heading')}
                </Text>
                <Text className={styles.text}>
                    {t('Members Text')}
                </Text>
                <Button className={styles.btn} onClick={handleOpenModal}>
                    {t("Become a Member")}
                </Button>
            </Stack>
        </Stack>

        {isOpen && (
                <Modal changeOpen={changeOpen}>
                    <ContactFormMember changeOpen={changeOpen} />
                </Modal>
            )}
    </section>
  )
}

export default Members;