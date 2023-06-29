// RootNavigation.js

import {createNavigationContainerRef} from '@react-navigation/native';
// import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';
import {CommonActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    // ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    // navigationRef.navigate(name, params);
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: name}],
      }),
    );
  }
}

export function replace(name, params) {
  if (navigationRef.isReady()) {
    // ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignInScreen'}],
      }),
    );
  }
}

// add other navigation functions that you need and export them
