import {all} from 'redux-saga/effects';
import signInSaga from './SingIn/saga';

function* rootSaga() {
  yield all([signInSaga()]);
}

export default rootSaga;
