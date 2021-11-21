import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

import FormButton from '../components/FormButton';

const ShapesScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View>
      <Text>Shapes {user.email}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
    </View>
  );
};

export default ShapesScreen;
