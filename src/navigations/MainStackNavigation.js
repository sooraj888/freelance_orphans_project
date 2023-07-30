import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MainBottomNavigation from './MainBottomNavigation';

import SplashScreen from '../screens/SplashScreen';
export default function MainStackNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="MainBottomNavigation"
        component={MainBottomNavigation}
      />
    </Stack.Navigator>
  );
}
