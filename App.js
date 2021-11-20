import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from './app/screens/OnboardingScreen';
import LoginScreen from './app/screens/LoginScreen';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Onboarding_Screen"
          component={OnboardingScreen}
        />
        <AppStack.Screen name="Login_Screen" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
