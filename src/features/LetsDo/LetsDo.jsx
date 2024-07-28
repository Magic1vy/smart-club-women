import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './LetsDo.module.scss';
import { Stack } from '../../shared/ui/Stack/Stack';
import Button from '../../shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import Text from '../../shared/ui/Text/Text';

const LetsDo = ({ changeOpen }) => {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("mnqykokr");
    const [showForm, setShowForm] = useState(true);

    const [phoneNumber, setPhoneNumber] = useState("");

    const formatPhoneNumber = (value) => {
        const cleaned = ('' + value).replace(/\D/g, '');
        const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            const intlCode = (match[1] ? '+1 ' : '');
            return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        }
        return value;
        };
    
        const handleChange = (event) => {
        const inputValue = event.target.value;
        const formattedValue = formatPhoneNumber(inputValue);
        setPhoneNumber(formattedValue);
        };
    
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
    <>
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
        <Stack 
            id='contacts' 
            align='alignCenter' 
        >
            <form onSubmit={handleSubmit} className={styles.formModal}>
                <label>
                    <input type="hidden" name="SERVICES" />
                </label>
                <label htmlFor="name">
                    {t('Your Full Name')}
                </label>
                <input
                    id="name"
                    type="text"
                    name="Full name"
                    placeholder={t('Type your name')}
                    required
                    state={state}
                    autoComplete="name" 
                    className={styles.inputField}
                />
                <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                />
                <label htmlFor="email">
                    {t('Your Email')}
                </label>
                <input
                    id="email"
                    type="email"
                    name="Email"
                    placeholder={t('Type your email')}
                    required
                    state={state}
                    autoComplete="email" 
                    className={styles.inputField}
                />
                <ValidationError
                    prefix="email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="tel">
                    {t('Your Phone Number')} 
                </label>
                <input
                    id="tel"
                    type="tel"
                    name="Phone Number"
                    placeholder={t('Type your phone number')}
                    state={state}
                    value={phoneNumber}
                    onChange={handleChange}
                    autoComplete="tel"
                    className={styles.inputField}
                />
                <ValidationError
                    prefix="tel"
                    field="tel"
                    errors={state.errors}
                />
                <label htmlFor="instagram">
                    {t('Your Instagram')}
                </label>
                <input
                    id="instagram"
                    type="text"
                    name="Instagram Link"
                    placeholder={t('Instagram Link')}
                    state={state}
                    className={styles.inputField}
                />
                <ValidationError
                    prefix="instagram"
                    field="instagram"
                    errors={state.errors}
                />
                <label htmlFor='website'>
                    {t('Your Website')}
                </label>
                <input
                    id="website"
                    type="text"
                    name="Website Link"
                    placeholder={t('Website Link')}
                    state={state}
                    className={styles.inputField}
                />
                <ValidationError
                    prefix="website"
                    field="website"
                    errors={state.errors}
                />
                <label htmlFor='find'>
                    {t("How did you find out about us?")}
                </label>
                <textarea
                    id="find"
                    name="How did you find out about us?"
                    placeholder={t("Type here...")}
                    className={styles.inputField}
                    required
                />
                <ValidationError
                    prefix="find"
                    field="find"
                    errors={state.errors}
                />
                <label htmlFor='challenge'>
                    {t("What is your biggest challenge with social media?")}
                </label>
                <textarea
                    id="challenge"
                    name="What is your biggest challenge with social media?"
                    placeholder={t("Type here...")}
                    className={styles.inputField}
                    required
                />
                <ValidationError
                    prefix="challenge"
                    field="challenge"
                    errors={state.errors}
                />
                <label htmlFor='achieve'>
                    {t("What do you hope to achieve from your Social Media Session?")}
                </label>
                <textarea
                    id="achieve"
                    name="What do you hope to achieve from your Social Media Session?"
                    placeholder={t("Type here...")}
                    className={styles.inputField}
                    required
                />
                <ValidationError
                    prefix="achieve"
                    field="achieve"
                    errors={state.errors}
                />
                <label htmlFor='goals'>
                    {t("List 2-3 key business goals you are aiming for over the next 6-12 months:")}
                </label>
                <textarea
                    id="goals"
                    name="List 2-3 key business goals you are aiming for over the next 6-12 months:"
                    placeholder={t("Type here...")}
                    className={styles.inputField}
                    required
                />
                <ValidationError
                    prefix="goals"
                    field="goals"
                    errors={state.errors}
                />
                <label htmlFor='else'>
                    {t("Is there anything else you'd like us to know?")}
                </label>
                <textarea
                    id="else"
                    name="Is there anything else you'd like us to know?"
                    placeholder={t("Type here...")}
                    className={styles.inputField}
                    required
                />
                <ValidationError
                    prefix="else"
                    field="else"
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
        </>
  )
}

export default LetsDo;