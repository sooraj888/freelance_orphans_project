import {combineReducers} from 'redux';
import {reducer} from './Add/reducer';
import {reducer as signInReducer} from './SingIn/reducer';
import {reducer as orphansListReducer} from './OrphansList/reducer';
export default combineReducers({reducer, signInReducer, orphansListReducer});
