import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/createStore';
import RouteNavigation from './Component/RouteNavigation/RouteNavigation';

export const App = () => (
  <Provider store={store}>
    <RouteNavigation />
  </Provider>
);
