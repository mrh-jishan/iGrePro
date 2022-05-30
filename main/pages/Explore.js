import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Api from '../Api';
import styles from '../assets/styles';

const Explore = () => {

  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    console.log("init here");
    Api.v1.quizz(1).then(res => {
      console.log("quiz exp: ", res.data);
      setQuizzes(res.data)
    }).catch(err => {
      console.log("erro exp: ", err);
    })
  }, [])

  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg} >
      <View style={styles.containerHome}>
        {quizzes.map((item, index) => (
          <View>
            <Text>{item.base_word}</Text>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

export default Explore;