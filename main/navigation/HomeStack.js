import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppInfo from '../pages/AppInfo';
import { Explore, Faq, Profile } from './../pages';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#7444C0",
                inactiveTintColor: "#363636",
                style: {
                    backgroundColor: "#DDD",
                    borderTopWidth: 0,
                    marginBottom: 0,
                    shadowOpacity: 0.05,
                    shadowRadius: 10,
                    shadowColor: "#CCC",
                    shadowOffset: { height: 0, width: 0 }
                }
            }}
        >
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <Icon name="search" color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Matches"
                component={Profile}
                options={{
                    tabBarLabel: 'Matches',
                    tabBarIcon: ({ color }) => (
                        <Icon name="heart" color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Faq}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <Icon name="envelope" color={color} size={20} />
                    ),
                }}
            />

            <Tab.Screen
                name="Settings"
                component={Explore}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Icon name="cogs" color={color} size={20} />
                    ),
                }}

            />

        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

class AuthStack extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName='Tab'
                screenOptions={{
                    safeAreaInsets: {
                        top: 0,
                        bottom: 0
                    }
                }}>

                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ title: "Profile" }} />

                <Stack.Screen
                    name="Faq"
                    component={Faq}
                    options={{ title: "Faq" }} />

                <Stack.Screen
                    name="AppInfo"
                    component={AppInfo}
                    options={{ title: "AppInfo" }} />

                <Stack.Screen
                    name="Tab"
                    component={MyTabs}
                    options={{
                        title: "Home",
                        headerLeft: () => { disabled: true },
                        headerTitleAlign: 'center'
                    }} />

            </Stack.Navigator>
        );
    }
}

export default AuthStack;
