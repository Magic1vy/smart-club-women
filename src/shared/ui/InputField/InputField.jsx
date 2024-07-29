import React from 'react';
import { ValidationError } from '@formspree/react';
import styles from './InputField.module.scss';
import { Stack } from '../Stack/Stack';

const InputField = ({ id, label, type, name, required, placeholder, state }) => {
    return (
        <Stack direction='column'>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                name={name}
                className={styles.inputField}
                required={required}
                placeholder={placeholder}
            />
            <ValidationError 
                prefix={label} 
                field={name}
                errors={state.errors}
            />
        </Stack>
    );
};

export default InputField;
