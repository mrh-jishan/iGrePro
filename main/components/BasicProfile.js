import { Formik } from 'formik';
import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
import { theme } from '../core/theme';
import hobby from './../assets/data/hobby';
import { Background, Button, DropDown, Header, TextInput } from './../components';


class BasicProfile extends Component {
    render() {
        return (
            <Background>
                <Header>Update Basic Details</Header>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        residence: 'football',

                    }}
                    onSubmit={user => {
                        console.log('User: ', user);

                    }}
                    validationSchema={yup.object().shape({
                        firstName: yup
                            .string()
                            .required(),
                        lastName: yup
                            .string()
                            .required(),
                        residence: yup
                            .string()
                            .required()

                    })}
                >
                    {({ values, handleChange, errors, setFieldValue, setFieldTouched, dirty, isValid, handleSubmit }) => (
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

                            <DropDown
                                items={[
                                    { label: 'Male', value: 'male' },
                                    { label: 'Female', value: 'female' },
                                ]}
                                placeholder="Gender"
                                containerStyle={styles.containerStyle}
                                itemStyle={{ justifyContent: 'flex-start' }}
                                onChangeItem={value => setFieldValue('residence', value.value)}
                            />

                            <DropDown
                                multiple={true}
                                items={hobby}
                                placeholder="Hobby"
                                containerStyle={styles.containerStyle}
                                itemStyle={{ justifyContent: 'flex-start' }}
                                onChangeItem={value => setFieldValue('residence', value.value)}
                            />

                            <DropDown
                                items={[
                                    { label: 'Married', value: 'Married' },
                                    { label: 'Widowed', value: 'Widowed' },
                                    { label: 'Separated', value: 'Separated' },
                                    { label: 'Divorced', value: 'Divorced' },
                                    { label: 'Single', value: 'Single' },
                                ]}
                                placeholder="Civil Status"
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


export default BasicProfile;