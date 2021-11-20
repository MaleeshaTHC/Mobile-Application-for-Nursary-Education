import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
    GoogleSignin.configure({
      webClientId:
        '518009141888-dvllqk7rhar65r7f7prgokbn72f00ogl.apps.googleusercontent.com',
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding_Screen';
  } else {
    routeName = 'Login_Screen';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen name="Onboarding_Screen" component={OnboardingScreen} />
      <Stack.Screen name="Login_Screen" component={LoginScreen} />
      <Stack.Screen name="Signup_Screen" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
