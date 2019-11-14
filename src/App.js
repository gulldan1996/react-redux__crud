import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { getNextState } from './store/reducers';
import RouteNavigation from './Component/RouteNavigation/RouteNavigation';

const store = createStore(getNextState);

export const App = () => (
  <Provider store={store}>
    <RouteNavigation />
  </Provider>
);
