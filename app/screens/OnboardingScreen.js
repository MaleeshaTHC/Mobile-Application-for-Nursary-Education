import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {back} from 'react-native/Libraries/Animated/Easing';

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
  return (
    <View style={{width: 5, height: 5, marginHorizontal: 3, backgroundColor}} />
  );
};

const Skip = ({...props}) => (
  <TouchableHighlight {...props} underlayColor={'none'}>
    <Text>Skip</Text>
  </TouchableHighlight>
);
const Next = ({...props}) => (
  <TouchableHighlight {...props} underlayColor={'none'}>
    <Text>Next</Text>
  </TouchableHighlight>
);
const Done = ({...props}) => (
  <TouchableHighlight {...props} underlayColor={'none'}>
    <Text>Done</Text>
  </TouchableHighlight>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace('Login_Screen')}
      onDone={() => navigation.navigate('Login_Screen')}
      pages={[
        {
          backgroundColor: '#fff',
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
