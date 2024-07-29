import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactFormSponsors.module.scss';
import InputField from '../../shared/ui/InputField/InputField';
import { Stack } from '../../shared/ui/Stack/Stack';
import Button from '../../shared/ui/Button/Button';
import Text from '../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

function ContactFormSponsors() {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("mnqykokr");

    useEffect(() => {
        if (state.succeeded) {
            document.querySelector('form').reset();
        }
    }, [state.succeeded]);

    return (
        <Stack className={styles.section}>
            <Text 
                type='h2'
                size='lg'
                className={styles.heading}
            >
                {t('Apply today')}
            </Text>
            <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                <input type="hidden" name="SPONSOR" />
            </label>
                <InputField
                    id="name"
                    type="text"
                    name="name"
                    placeholder={t('Your Full Name')}
                    required
                    state={state}
                />
                <InputField
                    id="instagram"
                    type="text"
                    name="instagram"
                    placeholder={t('Your Instagram')}
                    required
                    state={state}
                />
                <InputField
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t('Your Email')}
                    required
                    state={state}
                />
                <textarea
                    id="business"
                    name="business"
                    placeholder={t("What kind of business do you have?")}
                    className={styles.inputField}
                    required
                />
                <ValidationError
                    prefix="business"
                    field="business"
                    errors={state.errors}
                />
                <textarea
                    id="cooperation"
                    name="cooperation" 
                    placeholder={t("How do you see cooperation with us?")}
                    className={styles.inputField}
                    required
                />
                <ValidationError
                    prefix="cooperation"
                    field="cooperation"
                    errors={state.errors}
                />

                <Button
                        type="submit"
                        disabled={state.submitting}
                        className={styles.btn}
                    >
                        {state.submitting ? t('Submitting') : t('Submit')}
                    </Button>
            </form>
        </Stack>
    );
}

export default ContactFormSponsors;
