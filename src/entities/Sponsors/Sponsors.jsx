import React from 'react';
import styles from './Sponsors.module.scss';
import Text from '../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../shared/ui/Stack/Stack';
import { data } from '../SponsorsLine/lib/data';
import InstagramStatisctics from '../InstagramStatisctics/ui/InstagramStatisctics';
import Button from '../../shared/ui/Button/Button';
import Modal from '../../shared/ui/Modal/Modal';
import useModal from '../../shared/hooks/useModal';
import useOverflowHidden from '../../shared/hooks/useOverflowHidden';

const Sponsors = () => {
    const { t, i18n } = useTranslation();

    const { isOpen, changeOpen } = useModal();
    useOverflowHidden(isOpen);

    const handleOpenModal = () => {
        changeOpen();
    };

    const currentLanguage = i18n.language;
    
    return (
        <section className={styles.section}>
            <Text 
                type='h1' 
                size='xxl' 
                className={styles.heading}
            >
                {t('Sponsors Page Heading')}
            </Text>
            <Text>
                {t('Sponsors Page Text 1')}
            </Text>

            {currentLanguage === 'en' ? (
                <Text>
                    {t('Sponsors Page Text 2')}
                </Text>
            ) : (
                <Stack className={styles.list}>
                    <Text>
                        {t('Sponsors Page List 1')}
                    </Text>
                    <Text>
                        {t('Sponsors Page List 2')}
                    </Text>
                    <Text>
                        {t('Sponsors Page List 3')}
                    </Text>
                    <Text>
                        {t('Sponsors Page List 4')}
                    </Text>
                </Stack>
            )}




            <Stack 
                direction='row' 
                gap='30' 
                justify='justifyCenter' 
                className={styles.container}
            >
            {data.map((sponsor, index) => (
                <Stack 
                    key={index} 
                    className={styles.imgSponsor}
                    
                >
                    <img 
                        src={sponsor.img} 
                        alt={sponsor.name} 
                        className={styles.sponsorImg}
                        width="auto"
                        height="auto"
                    />
                    {sponsor.name2 ? (
                        <Stack justify='justifyCenter' align='alignCenter'>
                            <Text>{sponsor.name}</Text> 
                            <Text>{sponsor.name2}</Text>
                        </Stack> 
                        ):( 
                        <Stack justify='justifyCenter' align='alignCenter'>
                            <Text>{sponsor.name}</Text> 
                        </Stack>
                    )}
                </Stack>
            ))}
            </Stack>
            <Stack align='alignCenter' className={styles.btnStatistic}>
                <Button onClick={handleOpenModal}>
                    {t('Btn Instagram Statistic')}
                </Button>
            </Stack>
            

            {isOpen && (
                <Modal changeOpen={changeOpen}>
                    <InstagramStatisctics changeOpen={changeOpen} />
                </Modal>
            )}


        </section>
    )
}

export default Sponsors