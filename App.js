/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {I18nManager, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import 'react-native-gesture-handler';
import {Navigation} from './navigation/Navigation';
import minReducer from './store/reducers/minReducer';
import categoreReducer from './store/reducers/categoreReducer';
import cartReducer from './store/reducers/cartReducer';
import Reactotron from './ReactotronConfig';
import {Colors} from './constants/Config';

const rootReducer = combineReducers({minReducer, categoreReducer, cartReducer});
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);
const App = () => {
  useEffect(() => {
    I18nManager.forceRTL(true);
  }, []);
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.primaryColor}
      />
      <Navigation />
    </Provider>
  );
};

export default App;
