import React from 'react';
import styles from './Loader.module.scss'; 
import { Stack } from '../Stack/Stack';

const Loader = () => {
    return (
        <Stack direction='row' justify='justifyCenter' align='alignCenter'>
            <div className={styles.spinner}></div>
        </Stack>
    );
};

export default Loader;
