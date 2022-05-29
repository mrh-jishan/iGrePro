import React from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles';


const CardItem = ({ quizz }) => {

  return (
    <View style={styles.containerCardItem}>
      {quizz && (
        <View>
          <Text style={styles.walletText}>{quizz.baseWord}</Text>
          <Text style={styles.statusText}>{quizz.description}</Text>
        </View>
      )}


    </View>
  );
};

export default CardItem;
