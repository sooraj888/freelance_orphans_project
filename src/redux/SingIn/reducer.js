import {navigate, replace} from '../../navigations/RootNavigation';

const {SIGN_IN_SUCCESS} = require('./constant');
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
  try {
    await AsyncStorage.setItem('my-key', value);
  } catch (e) {
    // saving error
  }
};

const initialState = [{signIn: false}];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      console.log('SIGN_IN_SUCCESS');
      storeData(JSON.stringify({ad: 'pppppp'}));
      navigate('MainBottomNavigation');
      return {signIn: true};

    default:
      return state;
  }
};
