import { useRef } from 'react';

const useFormReset = () => {
    const fieldsRef = useRef({});

    const registerField = (name, ref) => {
        fieldsRef.current[name] = ref;
    };

    const resetFields = () => {
        Object.values(fieldsRef.current).forEach(field => {
            if (field && field.current) {
                field.current.value = '';
            }
        });
    };

    return {
        registerField,
        resetFields
    };
};

export default useFormReset;
