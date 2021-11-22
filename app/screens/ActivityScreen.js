/* eslint-disable react-native/no-inline-styles */
// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import * as React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import ActivityButton from '../components/ActivytyButton';

const ActivityScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.heading}>Fun Activities</Text>
      <View style={styles.button_container}>
        <ActivityButton
          buttonTitle="Alphabet"
          onPress={() => navigation.navigate('ExerciseScreenStack')}
        />
        <ActivityButton
          buttonTitle="Phrases"
          onPress={() => navigation.navigate('ExerciseScreenStack')}
        />
        <ActivityButton
          buttonTitle="Numbers"
          onPress={() => navigation.navigate('ExerciseScreenStack')}
        />
        <ActivityButton
          buttonTitle="Shapes"
          onPress={() => navigation.navigate('ExerciseScreenStack')}
        />
        <ActivityButton
          buttonTitle="Colors"
          onPress={() => navigation.navigate('ExerciseScreenStack')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    marginTop: 40,
    color: '#228257',
    textAlign: 'center',
  },
  button_container: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
