import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/styles';


const Balance = () => {
  return (
    <ImageBackground
      source={require('../assets/images/card.png')}
      style={styles.walletCard}
      imageStyle={{ borderRadius: 6}}
      resizeMode='cover' >

      <View style={{ paddingTop: 20 }}>
        <Text style={{ ...styles.walletText, paddingVertical: 10 }}>eWallet</Text>
        <Text style={styles.matchesTextProfileItem}>Current balance</Text>
        <View style={styles.info}>
          <Icon name="usd" size={20} style={styles.matchesTextProfileItem} />
          <Text style={styles.walletText}>25</Text>
        </View>
      </View>


      <View style={{ ...styles.actionsCardItem, paddingVertical: 0, }}>
        <TouchableOpacity
          style={{
            ...styles.buttonPrimary, backgroundColor: '#e74c3c',
            borderColor: '#c0392b',
          }}
          onPress={() => navigation.navigate("Login")}  >
          <Icon name="send" size={20} style={styles.loginButtonIcon} />
          <Text style={styles.loginButtonText}> Send </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("Register")}  >
          <Icon name="usd" size={20} style={styles.loginButtonIcon} />
          <Text style={styles.loginButtonText}> Receive </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Balance;
