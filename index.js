/**
 * @format
 */

import {AppRegistry, StatusBar} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import store from './src/redux/store';
import {Provider} from 'react-redux';
// const App
const AppRedux = () => {
  return (
    <Provider store={store}>
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor={'rgba(0,0,0,0)'}
      />
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppRedux);
