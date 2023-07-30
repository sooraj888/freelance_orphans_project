import {all} from 'redux-saga/effects';
import signInSaga from './SingIn/saga';
import orphansListSaga from './OrphansList/saga';

function* rootSaga() {
  yield all([signInSaga(), orphansListSaga()]);
}

export default rootSaga;
