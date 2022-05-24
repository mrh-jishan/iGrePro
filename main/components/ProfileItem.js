import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/styles';

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  me,
  user
}) => {

  const { navigate } = useNavigation();
  return (
    <View style={styles.containerProfileItem}>

      {me == false ?
        <View style={styles.matchesProfileItem}>
          <Text style={styles.matchesTextProfileItem}>
            <Icon name="heart" /> {matches}% Match!
          </Text>
        </View>
        :
        <TouchableOpacity style={styles.matchesProfileItem}
          onPress={() => { navigate('EditProfile') }}>
          <Text style={styles.matchesTextProfileItem}>
            <Icon name="edit" /> Edit  Profile
          </Text>
        </TouchableOpacity>
      }

      <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
      <Text style={styles.descriptionProfileItem}>
        {age} - {location}
      </Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="user" />
        </Text>
        <Text style={styles.infoContent}>{info1}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="circle" />
        </Text>
        <Text style={styles.infoContent}>{info2}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="hashtag" />
        </Text>
        <Text style={styles.infoContent}>{info3}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="calendar" />
        </Text>
        <Text style={styles.infoContent}>{info4}</Text>
      </View>
    </View>
  );
};


export default ProfileItem;
