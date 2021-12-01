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
    <ImageBackground
      source={require('../assets/images/background2.jpg')}
      style={styles.safearea}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <Text style={styles.text}>Welcome</Text>
      <Text />
      <Text style={styles.heading}>Let's Start Your</Text>
      <Text style={styles.heading}>Learning Journey !</Text>
      <Text />
      <ScrollView>
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/english.jpg')}
          onPress={() => navigation.navigate('EnglishScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/maths.jpg')}
          onPress={() => navigation.navigate('MathsScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/crafts.jpg')}
          onPress={() => navigation.navigate('CreativeScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/social.jpg')}
          onPress={() => navigation.navigate('CommunityScreen')}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  scrollview: {
    flex: 3.5,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 50,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginLeft: 320,
  },
  text: {
    fontSize: 25,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 55,
    fontWeight: '100',
    color: '#228257',
  },
  heading: {
    fontSize: 36,
    color: '#228257',
    textAlign: 'center',
    fontWeight: '100',
  },
});
