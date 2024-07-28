import React from 'react';
import styles from './TermsAndConditionsList.module.scss';
import Text from '../../../../shared/ui/Text/Text';

const TermsAndConditionsList = ({ list, description }) => {
    return (
        <>
            <Text
                type='h3'
                size='md'
                className={styles.subheading}
            >
                {list}
            </Text>
            <Text className={styles.text}>
                {description}
            </Text>
        </>
    )
}

export default TermsAndConditionsList;