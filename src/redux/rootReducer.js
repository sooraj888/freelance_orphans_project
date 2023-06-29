import {combineReducers} from 'redux';
import {reducer} from './Add/reducer';
import {reducer as signInReducer} from './SingIn/reducer';
export default combineReducers({reducer, signInReducer});
