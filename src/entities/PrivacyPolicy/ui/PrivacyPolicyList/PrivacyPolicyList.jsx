import React from 'react';
import Text from '../../../../shared/ui/Text/Text';
import styles from './PrivacyPolicyList.module.scss';

const PrivacyPolicyList = ({ title, text, list }) => {
    return (
        <div>
        <Text 
            type='h2' 
            size="md" 
            className={styles.subheading}
        >
            {title}
        </Text>
        {text && 
            <Text className={styles.text}>
                {text}
            </Text>
        }
        {list && list.length > 0 && (
            <ul className={styles.list}>
                {list.map((listItem, index) => (
                        <Text 
                            key={index} 
                            className={styles.text} 
                            type='li'
                        >
                            {listItem}
                        </Text>
                ))}
            </ul>
        )}
    </div>
    );
}

export default PrivacyPolicyList;