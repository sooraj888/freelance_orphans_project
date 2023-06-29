import {ADD} from './constant';

export function add(item) {
  return {type: ADD, payload: item};
}
