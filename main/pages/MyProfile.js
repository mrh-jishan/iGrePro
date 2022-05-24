import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import Demo from '../assets/data/demo.js';
import styles from '../assets/styles';
import { ProfileItem } from './../components';

class MyProfile extends Component {

    render() {
        const {
            age,
            image,
            info1,
            info2,
            info3,
            info4,
            location,
            match,
            name
        } = Demo[7];

        return (
            <ImageBackground
                source={require('../assets/images/bg.png')}
                style={styles.bg} >

                <ImageBackground source={image} style={styles.photo}>
                </ImageBackground>

                {/* <ProfileItem
                    matches={match}
                    name={this.props.user.firstName}
                    age={age}
                    location={location}
                    info1={info1}
                    info2={info2}
                    info3={info3}
                    info4={info4}
                    me={true}
                    user={this.props.user}
                /> */}
            </ImageBackground>
        );
    }
};

export default MyProfile;
