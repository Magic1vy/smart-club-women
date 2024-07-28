import React, { useEffect, useState } from 'react'
import Button from '../../shared/ui/Button/Button'
import { useTranslation } from 'react-i18next';
import styles from './ContactFormMember.module.scss';
import { useForm, ValidationError } from '@formspree/react';
import Text from '../../shared/ui/Text/Text';
import { Stack } from '../../shared/ui/Stack/Stack';

const ContactFormMember = ({ changeOpen}) => {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("mnqykokr");
    const [showForm, setShowForm] = useState(true);

    const handleCloseModal = () => {
        changeOpen(false);
    };

    useEffect(() => {
        if (state.succeeded) {
        setShowForm(false);
        const timer = setTimeout(() => {
            changeOpen(false);
        }, 2000);
        return () => clearTimeout(timer);
        }
    }, [state.succeeded, changeOpen]);

    if (!showForm) {
        return <Text className={styles.text}>{t("Success message")}</Text>;
    }

    return (
        <Stack justify="justifyCenter" align='alignCenter'>
        <Button
            navigation
            className={styles.closeBtn}
            onClick={handleCloseModal}
            aria-label="Close Modal Window"
        >
            <svg
            className={styles.closeBtnSvg}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.08095 7.26418L14.5335 0.71248L13.8318 0L7.37925 6.5517L1.16911 0.246094L0.467412 0.958573L6.67756 7.26418L0 14.0444L0.701693 14.7569L7.37925 7.97666L14.2992 15.003L15.0009 14.2905L8.08095 7.26418Z"
                fill="black"
            />
            </svg>
        </Button>
            <form onSubmit={handleSubmit} className={styles.formModal}>
                <label>
                    <input type="hidden" name="MEMBERS" />
                </label>
                <input
                    id="name"
                    type="text"
                    name="Full Name"
                    placeholder={t('Your Full Name')}
                    required
                    state={state}
                    className={styles.inputField}
                />
                <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                />
                <input
                    id="instagram"
                    type="text"
                    name="Instagram"
                    placeholder={t('Your Instagram')}
                    required
                    state={state}
                    className={styles.inputField}
                />
                <ValidationError
                    prefix="instagram"
                    field="instagram"
                    errors={state.errors}
                />
                <input
                    id="email"
                    type="email"
                    name="Email"
                    placeholder={t('Your Email')}
                    required
                    state={state}
                    className={styles.inputField}
                />
                <ValidationError
                    prefix="email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="member"
                    name="member"
                    placeholder={t("Tell about yourself")}
                    className={styles.inputField}
                    required
                />
                <ValidationError
                    prefix="member"
                    field="member"
                    errors={state.errors}
                />
                <textarea
                    id="join"
                    name="join" 
                    placeholder={t("Why do you want to join the club?")}
                    className={styles.inputField}
                    required
                />
                <ValidationError
                    prefix="join"
                    field="join"
                    errors={state.errors}
                />

                <Button
                    type="submit"
                    disabled={state.submitting}
                    className={styles.btn}
                >
                    {t('Submit')}
                </Button>
            </form>
        </Stack>
    )
}

export default ContactFormMember;