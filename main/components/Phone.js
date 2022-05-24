import { Formik } from 'formik';
import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
import { theme } from '../core/theme';
import { Background, Button, Header, TextInput } from '.';

const Phone = () => {
    return (
        <Background>
            <Header>Verify Phone Number</Header>
            <Formik
                initialValues={{
                    mobile: ''
                }}
                onSubmit={user => this.props.register(user)}
                validationSchema={yup.object().shape({
                    mobile: yup
                        .string()
                        .required().
                        min(6)
                })}
            >
                {({ values, handleChange, errors, setFieldTouched, dirty, isValid, handleSubmit }) => (
                    <Fragment>
                        <TextInput
                            label="Mobile Number"
                            returnKeyType="done"
                            value={values.mobile}
                            onChangeText={handleChange('mobile')}
                            placeholder="Mobile"
                            onBlur={() => setFieldTouched('mobile')}
                            error={!!errors.mobile}
                            errorText={errors.mobile}
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


export default Phone;