import { Formik } from 'formik';
import React, { Fragment, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import { theme } from '../core/theme';
import { AuthContext } from './../authContext';
import { Background, Button, Header, Logo, TextInput } from './../components';



const Login = ({ navigation }) => {
    const { login } = useContext(AuthContext);
    return (
        <Background>
            <Logo />
            <Header>Welcome back.</Header>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(body) => {
                    login(body).then(res => {
                        console.log("res: -----", res);
                    }).catch(err => {
                        console.log("err----", err);
                    })
                }}
                validationSchema={yup.object().shape({
                    username: yup
                        .string()
                        .required(),
                    password: yup
                        .string()
                        .required(),
                })}
            >
                {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                    <Fragment>
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