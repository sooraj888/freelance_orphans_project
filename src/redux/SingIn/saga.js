import {navigate} from '../../navigations/RootNavigation';
import {signInCompleted, signInEnd, signInFailure} from './action';
import {SIGN_IN_START} from './constant';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {ToastAndroid, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getEndPoit from '../../getEndPoint';
import getEndPoint from '../../getEndPoint';
const host = getEndPoint();

const url = host + '/admin/user_register';

const callApi = a => {
  const {email, password} = a;

  if (email && password) {
    return fetch(url, {
      method: 'POST',
      mode: 'cors', // Not required, only if you need to specify CORS mode
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: JSON?.stringify({
        action: 'login',
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(async data => {
        if (
          data.user_details?.[0]?.id &&
          data.user_details?.[0]?.name &&
          data.user_details?.[0]?.email &&
          data.user_details?.[0]?.phone &&
          data.user_details?.[0]?.password &&
          data.user_details?.[0]?.created &&
          data.user_details?.[0]?.status
        ) {
          await AsyncStorage.setItem(
            'my-key',
            JSON?.stringify(data?.user_details?.[0]),
          );
        } else {
          return {error: true};
        }
      })
      .catch(e => {
        console.error(e);
        return {error: true};
      });
  } else {
    return {error: true};
  }
};

function* userSagaList(a) {
  const user = yield call(callApi, a.payload);

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
