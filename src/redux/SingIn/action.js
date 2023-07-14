import {
  SIGN_IN_END,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
} from './constant';

export function signIn(login_credentials) {
  return {type: SIGN_IN_START, payload: login_credentials};
}

export function signInCompleted(payload) {
  return {type: SIGN_IN_SUCCESS, payload: payload};
}

export function signInFailure(payload) {
  return {type: SIGN_IN_FAILURE, payload: payload};
}

export function signInEnd(payload) {
  return {type: SIGN_IN_END, payload: payload};
}
