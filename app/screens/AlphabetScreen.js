/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FormButton from '../components/FormButton';
import Slider_Alp from '../stores/Slider_Alp';

const AlphabetScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <ImageBackground
      source={require('../assets/images/background2.jpg')}
      style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text}>Let's Learn Alphabet</Text>
      </View>
      <View style={styles.body}>
        <Slider_Alp />
      </View>
      <View style={styles.bottom}>
        <TouchableHighlight
          onPress={() => navigation.navigate('EnglishScreen')}
          underlayColor={'none'}>
          <MaterialCommunityIcons name="step-backward" size={25} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('HomeScreen')}
          underlayColor={'none'}>
          <MaterialCommunityIcons name="home" size={25} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('AlphabetQuiz')}
          underlayColor={'none'}>
          <MaterialCommunityIcons name="script-text" size={25} />
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
};

export default AlphabetScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  bottom: {
    flex: 0.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  text: {
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
});
