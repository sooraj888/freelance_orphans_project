/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './navigations/MainStackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native';

import store from './redux/store';
import {navigate, navigationRef, replace} from './navigations/RootNavigation';

import {useDispatch} from 'react-redux';
import {signIn} from './redux/SingIn/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {call} from 'redux-saga/effects';

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        setTimeout(() => {
          dispatch(signIn(67));
        }, 5000);
      } else {
        setTimeout(() => {
          replace();
        }, 5000);
      }
    } catch (e) {
      setTimeout(() => {
        replace();
      }, 5000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
