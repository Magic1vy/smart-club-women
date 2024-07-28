import React from 'react';
import styles from './ReviewMembers.module.scss'
import { useTranslation } from 'react-i18next';
import { data } from '../lib/data';
import { useSlide } from '../../../shared/hooks/useSlide';
import Text from '../../../shared/ui/Text/Text';
import { Stack } from '../../../shared/ui/Stack/Stack';
import Button from '../../../shared/ui/Button/Button';

const ReviewsMembers = () => {
    const { t } = useTranslation();
    const { nextSlide, prevSlide, activeIndex } = useSlide(data.length);

    return (
        <section 
            id='reviews' 
            className={`${styles.section} ${styles.sectionReview}`}
        >

        <Text
            type='h2'
            size='lg'
            className={styles.heading}
        >
            {t('Reviews')}
        </Text>

        <Stack className={styles.reviewWrapper}>
            {data.map((review, i) => 
                <Stack 
                    key={review.name} 
                    align='alignEnd'
                    className={`${styles.reviewItem} ${i === activeIndex ? styles.activeReview : styles.hiddenReview}`} 
                >
                    <Stack 
                    direction='column' 
                    className={styles.reviewContainer} 
                    justify='justifyCenter' 
                    gap='10'
                    >
                    <Text type='h3'>
                        {t(review.name)}
                    </Text>
                    <Stack direction='row' justify='justifyCenter'>
                        <span className={styles.star}>&#9733;</span>
                        <span className={styles.star}>&#9733;</span>
                        <span className={styles.star}>&#9733;</span>
                        <span className={styles.star}>&#9733;</span>
                        <span className={styles.star}>&#9733;</span>
                    </Stack>
                    <Text className={styles.reviewText}>
                        {t(review.review)}
                    </Text>
                    </Stack>
                </Stack>
            )}
        </Stack>


        <div className={styles.reviewButtons}>
            <Button 
                clear 
                className={styles.reviewButton} 
                onClick={prevSlide}
                ariaLabel="Previous Image"
            >
                &#10094;
            </Button>
            <Button 
                clear
                className={styles.reviewButton} 
                onClick={nextSlide}
                ariaLabel="Next Image"
            >
                &#10095;
            </Button>
            </div>
        </section>
    )
}

export default ReviewsMembers;