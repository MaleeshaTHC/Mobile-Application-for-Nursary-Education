import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

import FormButton from '../components/FormButton';

const ProfileScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View>
      <Text>Profile {user.email}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
    </View>
  );
};

export default ProfileScreen;