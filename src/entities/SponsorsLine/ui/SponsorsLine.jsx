import React from 'react';
import { data } from '../lib/data';
import { Stack } from '../../../shared/ui/Stack/Stack';
import Text from '../../../shared/ui/Text/Text';
import styles from './SponsorsLine.module.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../../../shared/ui/Button/Button';


const SponsorsLine = () => {
  const { t } = useTranslation();

  const combinedData = [...data, ...data];

  return (
    <section id='sponsors'>
      <Stack className={styles.section}>
        <Text 
          type='h2'
          size='lg'
          className={styles.heading}
        >
          {t('Sponsors Heading')}
        </Text>
      </Stack>
      <Stack className={styles.imageScrollContainer}>
        <Stack className={styles.imageScrollContent} direction='row'>
          {combinedData.map((sponsor, index) => (
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
                { sponsor.name2 ? (
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
      </Stack>

      <Stack justify='justifyCenter' align='alignCenter' gap='20'>
        <Link to="/sponsors">
          <Button>
            {t('Sponsors Btn')}
          </Button>
        </Link>
      </Stack>
    </section>
  )
}

export default SponsorsLine;