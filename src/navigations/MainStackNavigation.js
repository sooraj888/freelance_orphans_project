import {createStackNavigator} from '@react-navigation/stack';

import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {useDispatch} from 'react-redux';
import MainBottomNavigation from './MainBottomNavigation';
import {signIn} from '../redux/SingIn/action';
import SplashScreen from '../screens/SplashScreen';

export default function MainStackNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      // initialRouteName="MainBottomNavigation"
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
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
