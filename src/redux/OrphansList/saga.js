import {all, call, put, takeEvery} from 'redux-saga/effects';
import {GET_ORPHANS_LIST_INIT} from './constants';
import {getOrphanListFailure, getOrphanListSuccess} from './actions';
import axios from 'axios';
import getEndPoint from '../../getEndPoint';

const callApi = () => {
  const host = getEndPoint();
  return axios.post(host + '/admin/get_orphans');
};

function* userSagaList() {
  const users = yield call(callApi);

  if (!users.status == 200) {
    yield put(getOrphanListFailure());
  } else {
    yield put(getOrphanListSuccess(users.data.orphan_details));
  }
}

function* watchrGetOrphansDataSaga() {
  yield takeEvery(GET_ORPHANS_LIST_INIT, userSagaList);
}

function* orphansListSaga() {
  yield all([watchrGetOrphansDataSaga()]);
}

export default orphansListSaga;
