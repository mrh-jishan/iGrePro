import { Formik } from 'formik';
import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
import { theme } from '../core/theme';
import { Background, Button, Header, TextInput } from './';

const Email = () => {
    return (
        <Background>
            <Header>Verify Email Address</Header>
            <Formik
                initialValues={{
                    email: '',
                }}
                onSubmit={user => this.props.register(user)}
                validationSchema={yup.object().shape({
                    email: yup
                        .string()
                        .email()
                        .required().
                        min(6)
                })}
            >
                {({ values, handleChange, errors, setFieldTouched, dirty, isValid, handleSubmit }) => (
                    <Fragment>

                        <TextInput
                            label="Email"
                            returnKeyType="next"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            error={!!errors.email}
                            errorText={errors.email}
                        />


                        <Button mode="contained" onPress={handleSubmit}
                            disabled={!(isValid && dirty)}>Verify</Button>

                    </Fragment>
                )}
            </Formik>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    label: {
        color: theme.colors.secondary,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});


export default Email;