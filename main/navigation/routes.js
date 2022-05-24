import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Routes = () => {
    
    const [loggedIn, setLoggedIN] = useState(true)

    return (
        <NavigationContainer>
            {loggedIn ? <HomeStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Routes;