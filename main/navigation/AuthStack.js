import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home, Login, Register } from './../pages';

const Stack = createStackNavigator();

export default AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home" }} />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: "Login" }} />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ title: "Register" }} />

        </Stack.Navigator>
    );
}
