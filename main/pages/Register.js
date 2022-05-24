import { Formik } from 'formik';
import React, { Component, Fragment } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import { theme } from '../core/theme';
import { Background, Button, Header, Logo, TextInput } from './../components';
import { register } from './../redux/actions/authAction';

class Register extends Component {
    render() {
        const { navigation } = this.props;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Background>
                        <Logo />
                        <Header>Create Account</Header>
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
                            {({ values, handleChange, errors, setFieldTouched, dirty, isValid, handleSubmit }) => (
                                <Fragment>

                                    <TextInput
                                        label="First Name"
                                        returnKeyType="next"
                                        value={values.firstName}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={() => setFieldTouched('firstName')}
                                        errorText={errors.firstName}
                                    />

                                    <TextInput
                                        label="Last Name"
                                        returnKeyType="next"
                                        value={values.lastName}
                                        onChangeText={handleChange('lastName')}
                                        onBlur={() => setFieldTouched('lastName')}
                                        errorText={errors.lastName}
                                    />

                                    <TextInput
                                        label="Username"
                                        returnKeyType="next"
                                        value={values.username}
                                        onChangeText={handleChange('username')}
                                        onBlur={() => setFieldTouched('username')}
                                        errorText={errors.username}
                                    />

                                    <TextInput
                                        label="Password"
                                        returnKeyType="next"
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        placeholder="Password"
                                        onBlur={() => setFieldTouched('password')}
                                        secureTextEntry={true}
                                        errorText={errors.password}
                                    />

                                    <TextInput
                                        label="Confirm Password"
                                        returnKeyType="done"
                                        value={values.confirmPassword}
                                        onChangeText={handleChange('confirmPassword')}
                                        placeholder="Password"
                                        onBlur={() => setFieldTouched('confirmPassword')}
                                        secureTextEntry={true}
                                        errorText={errors.confirmPassword}
                                    />

                                    <Button mode="contained" onPress={handleSubmit}
                                        disabled={!(isValid && dirty)}>Sign Up</Button>

                                    <View style={styles.row}>
                                        <Text style={styles.label}>Already have an account? </Text>
                                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                            <Text style={styles.link}>Login</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Fragment>
                            )}
                        </Formik>
                    </Background>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
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

export default Register;