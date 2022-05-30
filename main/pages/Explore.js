import React, { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import Api from '../Api';
import styles from '../assets/styles';

const Explore = () => {

  const [quizzes, setQuizzes] = useState([])
  const [idx, setIdx] = useState(0)
  const [quizz, setQuizz] = useState({})
  const [more, setMore] = useState(false)
  const [less, setLess] = useState(false)

  const nextQuizz = () => {
    if (quizzes.length > (idx + 1)) {
      setQuizz(quizzes[idx + 1])
      setIdx(idx + 1)
    }
  }

  const prevQuizz = () => {
    if (idx > 1) {
      setQuizz(quizzes[idx - 1])
      setIdx(idx - 1)
    }
  }

  useEffect(() => {
    console.log("init here");
    Api.v1.quizz(1).then(res => {
      console.log("quiz exp: ", res.data);
      setQuizzes(res.data)
      setQuizz(res.data[idx])
      setLess(true)
      if (res.data.length > 1) {
        setMore(true)
      }
    }).catch(err => {
      console.log("erro exp: ", err);
    })
  }, [])

  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg} >
      <View style={styles.container}>
        <Card>
          <Card.Content>
            <Title>{quizz.base_word}</Title>
            <Paragraph>{quizz.translation}</Paragraph>
          </Card.Content>

          <Card.Actions>
            <Button onPress={prevQuizz}>Prev</Button>
            <Button onPress={nextQuizz}>Next</Button>
          </Card.Actions>
        </Card>
      </View>
    </ImageBackground>
  );
};

export default Explore;