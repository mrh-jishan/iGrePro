import React from 'react';
import { ImageBackground, Text } from 'react-native';
import styles from '../styles';

const Profile = () => {
    return (
        <ImageBackground
            source={require('../images/bg.png')} style={styles.bg} >
            <Text>This is profile</Text>
        </ImageBackground>
    );
};

export default Profile;
