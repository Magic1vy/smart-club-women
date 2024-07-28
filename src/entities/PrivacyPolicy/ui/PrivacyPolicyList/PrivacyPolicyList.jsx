// import React from 'react';
// import Text from '../../../../shared/ui/Text/Text';
// import styles from './PrivacyPolicyList.module.scss';
// import { Stack } from '../../../../shared/ui/Stack/Stack';

// const PrivacyPolicyList = ({ title, description, text, list}) => {
//     return (
//         <div>
//             <Text type='h2' className={styles.subheading}>
//                 {title}
//             </Text>
//             {typeof description === 'string' ? (
//                 <Text>{description}</Text>
//             ) : (
//                 <Stack>
//                     <Text>{description.text}</Text>
//                     <ul>
//                     {description.list && description.list.map((listItem, listIndex) => (
//                         <Text key={listIndex} type='li'>{listItem}</Text>
//                     ))}
//                     </ul>
//                 </Stack>
//             )}
//             {text && <Text>{text}</Text>}
//             {list && (
//                 <ul>
//                 {list.map((listItem, listIndex) => (
//                     <Text key={listIndex} type='li'>{listItem}</Text>
//                 ))}
//                 </ul>
//             )}
//         </div>
//     )
// }

// export default PrivacyPolicyList;


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