import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <Icon name="compass" size={15}/> New York
      </Text>
    </TouchableOpacity>
  );
};

export default City;
