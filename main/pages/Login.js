import { Formik } from 'formik';
import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import { theme } from '../core/theme';
import { Background, Button, Header, Logo, TextInput } from './../components';

class Login extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Background>
                <Logo />
                <Header>Welcome back.</Header>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={user => this.props.login(user)}
                    validationSchema={yup.object().shape({
                        email: yup
                            .string()
                            .email()
                            .required(),
                        password: yup
                            .string()
                            .min(6)
                            .required(),
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <Fragment>
                            <TextInput
                                label="Email"
                                returnKeyType="next"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={() => setFieldTouched('email')}
                                errorText={errors.email}
                            />

                            <TextInput
                                label="Password"
                                returnKeyType="done"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                placeholder="Password"
                                onBlur={() => setFieldTouched('password')}
                                secureTextEntry={true}
                                errorText={errors.password}
                            />

                            <Button mode="contained" onPress={handleSubmit} disabled={!isValid}>Login</Button>

                            <View style={styles.row}>
                                <Text style={styles.label}>Don’t have an account? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                    <Text style={styles.link}>Sign up</Text>
                                </TouchableOpacity>
                            </View>
                        </Fragment>
                    )}
                </Formik>

            </Background>
        );
    }
};

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});

export default Login;