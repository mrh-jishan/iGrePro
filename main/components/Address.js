import { Formik } from 'formik';
import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
import { theme } from '../core/theme';
import Countries from '../assets/data/countries';
import { Background, Button, Header, TextInput, DropDown } from '.';

const Address = () => {
    return (
        <Background>
            <Header>Address Details</Header>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    mobile: ''
                }}
                onSubmit={user => this.props.register(user)}
                validationSchema={yup.object().shape({
                    firstName: yup
                        .string()
                        .required(),
                    lastName: yup
                        .string()
                        .required(),
                    email: yup
                        .string()
                        .email()
                        .required(),
                    password: yup
                        .string()
                        .min(8)
                        .required(),
                    confirmPassword: yup
                        .string()
                        .oneOf([yup.ref('password'), null], 'Passwords must match'),
                    mobile: yup
                        .string()
                        .required().
                        min(6)
                })}
            >
                {({ values, handleChange, errors,setFieldValue, setFieldTouched, dirty, isValid, handleSubmit }) => (
                    <Fragment>

                            <DropDown
                                items={Countries}
                                placeholder="Country Residence"
                                defaultValue={values.residence}
                                containerStyle={styles.containerStyle}
                                itemStyle={{ justifyContent: 'flex-start' }}
                                onChangeItem={value => setFieldValue('residence', value.value)}
                            />

                            <DropDown
                                items={Countries}
                                placeholder="Citizenship"
                                defaultValue={values.residence}
                                containerStyle={styles.containerStyle}
                                itemStyle={{ justifyContent: 'flex-start' }}
                                onChangeItem={value => setFieldValue('residence', value.value)}
                            />

                            <DropDown
                                items={Countries}
                                placeholder="Current City"
                                defaultValue={values.residence}
                                containerStyle={styles.containerStyle}
                                itemStyle={{ justifyContent: 'flex-start' }}
                                onChangeItem={value => setFieldValue('residence', value.value)}
                            />


                        <Button mode="contained" onPress={handleSubmit}
                            disabled={!(isValid && dirty)}>Update</Button>

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
    containerStyle: {
        height: 56,
        width: "100%",
        marginVertical: 5,
        padding: .4,
        borderRadius: 5,

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


export default Address;