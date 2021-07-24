import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { storeFn } from './redux/store';
import { Routes } from './routes/index';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeFn()}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
