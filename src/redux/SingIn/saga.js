import {signInCompleted} from './action';
import {SIGN_IN_START} from './constant';
import {all, call, put, takeEvery} from 'redux-saga/effects';

function callApi() {
  return fetch('https://mocki.io/v1/a2d54d32-17ed-418b-8a77-7b9c0949c513')
    .then(response => response.json())
    .catch(e => {
      return e;
    });
}
function* userSagaList() {
  console.log('called userSagaList');
  const user = yield call(callApi);
  console.log('called api ', JSON.stringify({sdsd: user}));
  yield put(signInCompleted({}));
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
