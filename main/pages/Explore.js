import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';
import SwipeCards from 'react-native-swipe-cards';
import Api from '../Api';
import styles from '../assets/styles';
import { Background } from '../components';

const Card = ({ base_word,translation }) => {
  return (
    <FlipCard
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
      onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
    >
      <View style={styles.cardFace}>
        <Text style={styles.walletText}>{base_word}</Text>
      </View>
      <View style={styles.cardBack}>
        <Text style={styles.walletText}>{translation}</Text>
      </View>
    </FlipCard>
  )
}

const Explore = () => {

  const [quizzes, setQuizzes] = useState([{ base_word: "test" }])

  const handleYup = (card) => {
    console.log(`Yup for ${card}`)
  }
  const handleNope = (card) => {
    console.log(`Nope for ${card}`)
  }

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
    <Background>
      <View style={styles.container}>
        <SwipeCards
          cards={quizzes}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => (
            <View style={styles.card}>
              <Text style={styles.title}>No more cards</Text>
            </View>
          )}
          handleYup={handleYup}
          handleNope={handleNope}
        />
      </View>
    </Background>
  );
};

export default Explore;