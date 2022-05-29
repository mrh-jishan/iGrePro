import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import Demo from '../assets/data/demo';
import styles from '../assets/styles';
import { CardItem, CardStack } from './../components';

class Explore extends Component {

  render() {
    return (
      <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg} >

        <View style={styles.containerHome}>
          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            onSwipedLeft={() => console.log('onSwipedLeft')}
            onSwipedRight={() => console.log('Swipe right')}
          >
            {Demo.map((item, index) => (
              <CardItem
                key={index}
                quizz={item}
              />
            ))}
          </CardStack>

        </View>
      </ImageBackground>
    );
  }
};

export default Explore;