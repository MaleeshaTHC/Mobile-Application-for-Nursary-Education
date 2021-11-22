/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

import FormButton from '../components/FormButton';

const AlphabetScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View>
      <Text>Alphabet {user.email}</Text>
      <FormButton
        buttonTitle="Logout"
        onPress={() => navigation.navigate('ExerciseScreenStack')}
      />
    </View>
  );
};

export default AlphabetScreen;
