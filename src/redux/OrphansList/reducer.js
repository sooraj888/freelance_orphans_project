import {
  GET_ORPHANS_LIST_FAILURE,
  GET_ORPHANS_LIST_SUCCESS,
  GET_ORPHANS_LIST_INIT,
} from './constants';

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORPHANS_LIST_INIT:
      return {...state, isLoading: true};
    case GET_ORPHANS_LIST_SUCCESS:
      return {...state, data: action.payload, isLoading: false};
    case GET_ORPHANS_LIST_FAILURE:
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
};
