import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
