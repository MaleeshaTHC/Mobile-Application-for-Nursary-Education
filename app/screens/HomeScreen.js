/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  ImageBackground,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import NavigationCard from '../components/NavigationCard';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.safearea}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>{user.email}</Text>
      <Text />
      <Text style={styles.heading}>Let's Start !</Text>
      <Text />
      <ScrollView style={{backgroundColor: '#d0f7e6'}}>
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/english.jpg')}
          onPress={() => navigation.navigate('AlphabetScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/maths.jpg')}
          onPress={() => navigation.navigate('MathsScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/crafts.jpg')}
          onPress={() => alert('Clicked')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/social.jpg')}
          onPress={() => alert('Clicked')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#d0f7e6',
  },
  scrollview: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 80,
    marginLeft: 355,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'right',
    marginRight: 20,
  },
  heading: {
    fontSize: 40,
    marginTop: 10,
    color: '#228257',
    textAlign: 'center',
  },
});
