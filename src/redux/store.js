// import rootReducer from './rootReducer';
import rootReducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import sagaData from './saga';

import signInSaga from './SingIn/saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(signInSaga);
export default store;
