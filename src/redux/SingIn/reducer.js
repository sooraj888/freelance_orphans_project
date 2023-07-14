import {navigate, replace} from '../../navigations/RootNavigation';

const {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_END,
  SIGN_IN_START,
} = require('./constant');
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
  try {
    await AsyncStorage.setItem('my-key', value);
  } catch (e) {
    // saving error
  }
};

const initialState = {signIn: false, loading: false, data: null};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_START:
      return {...state, signIn: false, loading: true};
    case SIGN_IN_SUCCESS:
      storeData(JSON.stringify({ad: 'pppppp'}));
      return {...state, signIn: true, loading: false, data: action.payload};
    case SIGN_IN_FAILURE:
      return {...state, signIn: false};
    case SIGN_IN_END:
      return {...state, loading: false};
    default:
      return state;
  }
};
