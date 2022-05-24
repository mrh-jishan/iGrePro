import React, { Component } from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Demo from '../assets/data/demo.js';
import styles from '../assets/styles';
import { CardItem } from './../components';


class Matches extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <View style={styles.containerMatches}>
          <FlatList
            numColumns={2}
            data={Demo}
            ListHeaderComponent={
              <>
                <View style={styles.top}>
                  <Text style={styles.title}>Matches</Text>
                  <TouchableOpacity>
                    <Text style={styles.icon}>
                      <Icon name="filter" size={20} />
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            }
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}  >
                <CardItem
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  variant
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
};

export default Matches;