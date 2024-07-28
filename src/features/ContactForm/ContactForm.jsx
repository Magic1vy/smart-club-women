import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.scss';
import InputField from '../../shared/ui/InputField/InputField';
import { Stack } from '../../shared/ui/Stack/Stack';
import Button from '../../shared/ui/Button/Button';
import Text from '../../shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

function ContactForm() {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("mnqykokr");

    useEffect(() => {
        if (state.succeeded) {
            document.querySelector('form').reset();
        }
    }, [state.succeeded]);

    return (
        <section id='contacts'>
            <Stack 
                align='alignCenter' 
                className={styles.section}
            >
                <Text 
                    type='h2'
                    size='lg'
                    className={styles.heading}
                >
                    {t('Contacts')}
                </Text>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <InputField
                        id="name"
                        type="text"
                        name="Full Name"
                        placeholder={t('Your Full Name')}
                        required
                        state={state}
                    />
                    <InputField
                        id="instagram"
                        type="text"
                        name="Your Instagram"
                        placeholder={t('Your Instagram')}
                        required
                        state={state}
                    />
                    <InputField
                        id="email"
                        type="email"
                        name="Your Email'"
                        placeholder={t('Your Email')}
                        required
                        state={state}
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder={t("Your Comments")}
                        className={styles.inputField}
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
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
        </section>
    );
}

export default ContactForm;
