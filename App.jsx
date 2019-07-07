/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import AppRoute from './src/router';
import store from './src/store';

const App = () => {
  return (
    <Root>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </Root>
  );
};

export default App;
