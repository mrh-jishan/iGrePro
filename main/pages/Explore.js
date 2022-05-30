import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { Button } from 'react-native-paper';
import SwipeCards from 'react-native-swipe-cards';
import Api from '../Api';
import { Background, Paragraph } from '../components';
import styles from '../styles';

const Card = ({ cardData, isFlip }) => {
  return (
    <FlipCard
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={isFlip}
      clickable={true}
      useNativeDriver={true}
      onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
    >
      <View style={styles.cardFace}>
        <Paragraph style={styles.walletText}>{cardData.base_word}</Paragraph>
      </View>
      <View style={styles.cardBack}>
        <Paragraph>{cardData.translation}</Paragraph>
        <Text style={styles.title}>{cardData.synonym}</Text>
        <Text style={styles.subTitle}>{cardData.description}</Text>
      </View>
    </FlipCard>
  )
}

const Explore = ({ navigation }) => {

  const [quizzes, setQuizzes] = useState([{ base_word: "test" }])
  const [isFlip, setIsFlip] = useState(false)
  const [planId, setPlanId] = useState(1)

  const handleYup = (card) => {
    console.log(`Yup for ${card}`)
    setIsFlip(false)
  }
  const handleNope = (card) => {
    console.log(`Nope for ${card}`)
    setIsFlip(false)
  }

  useEffect(() => {
    console.log("init here");
    Api.v1.quizz(planId).then(res => {
      console.log("quiz exp: ", res.data);
      setQuizzes(res.data)
    }).catch(err => {
      console.log("erro exp: ", err);
    })
  }, [planId])

  return (
    <Background>
      <View style={styles.container}>
        <SwipeCards
          useNativeDriver={true}
          cards={quizzes}
          renderCard={(cardData) => <Card cardData={cardData}
            isFlip={isFlip}
            setIsFlip={setIsFlip} />}
          renderNoMoreCards={() => (
            <View style={styles.card}>
              <Text style={styles.inputext}>No more words</Text>
              <Button onPress={() => navigation.navigate('Profile')}>Reset</Button>
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