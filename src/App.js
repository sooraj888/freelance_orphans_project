/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

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

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
