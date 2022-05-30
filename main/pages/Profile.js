import React from 'react';
import { ImageBackground, Text } from 'react-native';
import styles from '../assets/styles';

const Profile = () => {
    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.bg} >
            <Text>This is profile</Text>
        </ImageBackground>
    );
};

export default Profile;
