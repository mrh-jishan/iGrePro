import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from './../authContext';
import { Button } from './../components';

const AppInfo = () => {
    const { logout } = useContext(AuthContext);
    return (
        <View>
            <Text>This is AppInfo</Text>
            <Button mode="contained" onPress={logout}>Logout</Button>
        </View>
    )
}

export default AppInfo;