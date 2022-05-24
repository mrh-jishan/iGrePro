import React, { Component } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Demo from '../assets/data/demo.js';
import styles from '../assets/styles';
import { ProfileItem } from './../components';

class Profile extends Component {

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
      me
    } = Demo[7];

    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <ScrollView style={styles.containerProfile}>
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
            me={false}
            user= {this.props.user}
          /> */}

          <View style={styles.actionsProfile}>
            <TouchableOpacity style={styles.circledButton}>
              <Text style={styles.iconButton}>
                <Icon name="ellipsis-h" />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.roundedButton}>
              <Text style={styles.iconButton}>
                <Icon name="envelope-open" size={20} />
              </Text>
              <Text style={styles.textButton}>Start chatting</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
};

export default Profile;
