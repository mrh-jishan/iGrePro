import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import Demo from '../assets/data/demo';
import styles from '../assets/styles';
import { Card, CardItem, CardStack } from './../components';

class Explore extends Component {

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.png')} style={styles.bg} >

        <View style={styles.containerHome}>
          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            // ref={swiper => (this.swiper = swiper)}
            onSwiped={() => console.log('onSwiped')}
            onSwipedLeft={() => console.log('onSwipedLeft')}
            onSwipedRight={() => console.log('Swipe right')}
          >
            {Demo.map((item, index) => (
              <Card key={index}>
                <CardItem
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  matches={item.match}
                  actions
                  onPressLeft={() => console.log('press left onSwiped')}
                  onPressRight={() => console.log(' press right onSwiped')}
                />
              </Card>
            ))}
          </CardStack>

        </View>
      </ImageBackground>
    );
  }
};

export default Explore;