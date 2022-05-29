import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { AuthContext } from '../authContext';
import RNDialog from '../pages/RNDialog';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Routes = () => {

    const { loggedIn, visible, message } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <RNDialog visible={visible} message={message} />
            {loggedIn ? <HomeStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Routes;