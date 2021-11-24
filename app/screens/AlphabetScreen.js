/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

import FormButton from '../components/FormButton';
import Slider_Alp from '../stores/Slider_Alp';

const AlphabetScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text}>Let's Learn Alphabet</Text>
      </View>
      <View style={styles.body}>
        <Slider_Alp />
      </View>
      <View style={styles.bottom}>
        <FormButton
          buttonTitle={'Go to Activity'}
          onPress={() => navigation.navigate('AlphabetQuiz')}
        />
      </View>
    </View>
  );
};

export default AlphabetScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#d0f7e6',
  },
  body: {
    flex: 8.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 2,
    backgroundColor: '#68f2b4',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  bottom: {
    flex: 0.9,
    backgroundColor: '#d0f7e6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  text: {
    fontSize: 33,
    marginTop: 10,
    color: '#228257',
  },
});
