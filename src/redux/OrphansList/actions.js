const {
  GET_ORPHANS_LIST_FAILURE,
  GET_ORPHANS_LIST_INIT,
  GET_ORPHANS_LIST_SUCCESS,
} = require('./constants');

export const getOrphanList = payload => {
  return {type: GET_ORPHANS_LIST_INIT, payload: payload};
};

export const getOrphanListFailure = payload => {
  return {type: GET_ORPHANS_LIST_FAILURE, payload: payload};
};

export const getOrphanListSuccess = payload => {
  return {type: GET_ORPHANS_LIST_SUCCESS, payload: payload};
};
