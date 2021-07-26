import React from 'react';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from '../redux/reducers';

export const store = createStore(rootReducer);

export const ProviderMock = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route>
          {children}
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);