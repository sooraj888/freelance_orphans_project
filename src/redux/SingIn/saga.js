import {navigate} from '../../navigations/RootNavigation';
import {signInCompleted, signInEnd, signInFailure} from './action';
import {SIGN_IN_START} from './constant';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {ToastAndroid, Alert} from 'react-native';

const callApi = () => {
  return fetch('https://mocki.io/v1/a2d54d32-17ed-418b-8a77-7b9c0949c513')
    .then(response => response.json())
    .catch(e => {
      return {error: true};
    });
};

function* userSagaList() {
  console.log('called userSagaList');
  const user = yield call(callApi);
  console.log('user', user);
  if (user?.error) {
    // console.log('erroe');

    navigate('SignInScreen');
    ToastAndroid.show('Login failed', ToastAndroid.SHORT);
    yield put(signInFailure());
    yield put(signInEnd());
  } else {
    navigate('MainBottomNavigation');
    yield put(signInCompleted(user));
    yield put(signInEnd());
  }
}

export function* helloSaga() {
  console.log('Hello Sagas!');
}
function* watchrSignInSaga() {
  yield takeEvery(SIGN_IN_START, userSagaList);
}

function* signInSaga() {
  yield all([watchrSignInSaga(), helloSaga()]);
}

export default signInSaga;
